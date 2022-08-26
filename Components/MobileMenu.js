import React from 'react';
import styles from '../styles/components/MobileMenu.module.css'

const MobileMenu = ({setstate}) => {
    const clickHandler = () => {
        setstate(false)
    }
    return (
        <div className={styles.mobile_menu}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="/images/logo.png" />
                    <i className={`fa fa-times ${styles.times}`} onClick={clickHandler}></i>
                </div>
                <div className={styles.body}>
                    <ul className={styles.menu}>
                        <li>خانه</li>
                        <li>اتومبيل</li>
                        <li>اشخاص</li>
                        <li>حوادث</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;