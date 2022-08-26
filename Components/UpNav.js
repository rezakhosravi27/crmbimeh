import React from 'react';
import styles from '../styles/components/UpNav.module.css'

const UpNav = () => {
    return (
        <div className="container-fluid">
            <div className="row d-none d-lg-block">
                <div className="col-sm-12 p-0">
                        <div className={styles.container_img}>
                            <img src="/images/upnav.jpg" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default UpNav;