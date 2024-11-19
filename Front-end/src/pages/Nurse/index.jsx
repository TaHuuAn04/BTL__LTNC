import NurseList from '../../components/NurseList';
import { useState, useEffect } from 'react';
import React from 'react';

import axios from 'axios';
import AddNurse from '../../components/AddNurse';
import styles from './Nurse.module.scss';
import classNames from 'classNames/bind';
import UserInfo from '../../components/commons/UserInfo';
import Logo from '../../components/commons/Logo';
import Sidebar from '../../components/commons/Sidebar';
import Layout from '../../Layout';

import { useAuth } from '../../AuthContext';
const cx = classNames.bind(styles);

function Nurse() {
    const [nurseList, setNurseList] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const { isAdmin } = useAuth();

    const handleChange = (event) => {
        setSearchVal(event.target.value);
    };

    useEffect(() => {
        if (searchVal) {
            const results = nurseList.filter(nurse =>
                nurse.name.toLowerCase().includes(searchVal.toLowerCase()));
                
                setNurseList(results);
                
        } else {
            setIsSearching(false);
            fetch('http://localhost:3000/nurses')
                .then((response) => response.json())
                .then((data) => {
                    setNurseList(data);
                })
                .catch((error) => console.error('Error fetching books:', error));
        }
    }, [searchVal]);



    const createNurse = (newNurse) => {
        axios
            .post('http://localhost:3000/nurses', newNurse)
            .then((response) => setNurseList([...nurseList, response.data]))
            .catch((error) => console.log(error));
    };

    return (
        <Layout>
            <div style={{ backgroundColor: '#ccc', marginLeft: '12px' }}>
                <div className={cx('nurse-icon')}>
                    <img src="src/assets/nurse.png" />
                </div>
                <div className={cx('header')}>
                    <div className={cx('header-general')}>
                        <p className={cx('header-title')}>Y tá hiện có</p>
                        <span className={cx('header-count')}>{nurseList.length}</span>
                    </div>
                    <input
                        onChange={handleChange}
                        value={searchVal}
                        className={cx('search')}
                        placeholder="Nhập tên/mã số nhân viên y tá cần tìm..."
                    ></input>
                    <div className={cx('add-nurse')}>
                        {isAdmin && <AddNurse callAPI={createNurse} updateTotal={updateTotal} />}
                    </div>
                </div>
                <div className={cx('nurse-space')}>
                    <div className={cx('label')}>
                        <div className={cx('id')}>Mã số</div>
                        <div className={cx('name')}>Họ tên</div>
                        <div className={cx('sex')}>Giới tính</div>
                        <div className={cx('qualification')}>Chứng chỉ</div>
                        <div className={cx('major')}>Chuyên môn</div>
                        <div className={cx('floor')}>Tầng</div>
                        <div className={cx('room')}>Phòng</div>
                        <div className={cx('day-off')}>Ngày nghĩ trong tuần</div>
                    </div>
                    <NurseList ls={nurseList} />
                </div>
            </div>
        </Layout>
    );
}

export default Nurse;
