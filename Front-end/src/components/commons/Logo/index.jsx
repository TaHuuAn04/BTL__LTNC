import classNames from 'classNames/bind';
import React from 'react';

import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <Link className={cx("logo-container")} to="/dashboard">
            <div className={cx('logo-wrapper')}>
                <img className={cx('logo-img')} src="src/assets/logo.png" alt="BKMEC"></img>
                <h1 className={cx("brand-name")} >BKMEC</h1>
            </div>
        </Link>
    );
}

export default Logo;
