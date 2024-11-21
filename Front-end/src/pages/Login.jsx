import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useAuth } from '../AuthContext';
import '../components/commons/Logo';
import Logo from '../components/commons/Logo';
const Login = () => {
    const { handleLogin } = useAuth();
    const { setLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginRequest = async (apiEndPoint, isAdmin) => {
        try {
            const response = await axios.post(apiEndPoint, formData);
            console.log(response.data);
            if (response.status === 200) {
                handleLogin(formData, isAdmin);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
                navigate('/');
            }
        } catch (error) {
            console.error('Đã có lỗi xảy ra', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isAdmin = document.getElementById('isAdmin').checked;
        // Thực hiện kiểm tra thông tin đăng nhập, ví dụ: tạm thời kiểm tra username và password là "admin"
        // if (formData.username === 'admin' && formData.password === 'admin') {
        //     // Đăng nhập thành công, chuyển hướng đến trang dashboard
        //     navigate('/dashboard');
        // } else {
        //     // Đăng nhập không thành công, xử lý tại đây (ví dụ: hiển thị thông báo lỗi)
        //     alert('Bạn nhập sai Tài khoản hoặc Mật khẩu');
        // }

        handleLoginRequest('http://localhost:4001/api/login', isAdmin);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            setLoggedIn(true);
        }
    }, [setLoggedIn]);

    return (
        <div className="login-page">
            <div className="login-logo-wrapper">
                <Logo />
            </div>
            <p style={{ marginLeft: '156px', fontSize: '18px', fontStyle: 'italic', color: '#ddd' }}>
                Chào mừng bạn quay trở lại với BKMEC !
            </p>
            <div className="login-form">
                <h1>Đăng nhập</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="login-lable">Username</label>
                        <input
                            className="login-input"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="login-lable">Password</label>
                        <input
                            className="login-input"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: '8px' }} className="isAdminCheck">
                        <input type="checkbox" id="isAdmin"></input>
                        <label htmlFor="isAdmin">Bạn là Admin của BKMEC?</label>
                    </div>
                    <button className="login-btn" type="submit">
                        Đăng nhập
                    </button>
                </form>
            </div>
            <img className="img-logo" src="src\assets\Group 2.png"></img>
        </div>
    );
};

export default Login;
