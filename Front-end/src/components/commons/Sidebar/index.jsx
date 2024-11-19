import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Sidebar() {
    const location = useLocation();

    return (
        
            <ul className="sidebar-list">
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/dashboard' ? 'active' : ''}>Trang chủ</div>
                    </li>
                </Link>
                <Link to="/doctor" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/doctor' ? 'active' : ''}>Bác sĩ</div>
                    </li>
                </Link>
                <Link to="/nurse" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/nurse' ? 'active' : ''}>Y tá</div>
                    </li>
                </Link>
                <Link to="/patient" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/patient' ? 'active' : ''}>Bệnh nhân</div>
                    </li>
                </Link>
                <Link to="/medicine" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/medicine' ? 'active' : ''}>Kiểm kê thuốc</div>
                    </li>
                </Link>
            </ul>
        
    );
}

export default Sidebar;
