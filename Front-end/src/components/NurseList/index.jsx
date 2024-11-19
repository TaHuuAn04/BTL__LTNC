import classNames from 'classNames/bind';
import React from 'react';

import styles from './NurseList.module.scss';

const cx = classNames.bind(styles);

//fake data

function NurseList({ ls }) {
    return (
        <ul className={cx('nurse-list')}>
            {ls.map((nurse, index) => {
                return (
                    <li key={index} className={cx('nurse-list-item-wrap')}>
                        <div className={cx('nurse-list-item')}>
                            <div className={cx('id')}>{nurse.id}</div>
                            <div className={cx('name')}>{nurse.name}</div>
                            <div className={cx('sex')}>{nurse.sex}</div>
                            <div className={cx('qualification')}>{nurse.qualifications}</div>
                            <div className={cx('major')}>{nurse.expertise}</div>
                            <div className={cx('floor')}>{nurse.floor}</div>
                            <div className={cx('room')}>{nurse.room}</div>
                            <div className={cx('day-off')}>{nurse.time_off}</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default NurseList;
