import React from 'react';
import styles from '../styles/components/MobileJobs.module.css'

const MobileJobs = () => {
    return (
        <div className="container-fluid d-sm-none mt-1">
            <div className="row">
                <div className={styles.container_mobile_jobs}>
                    <div className={styles.mobile_icons_inner}>
                        <h2 className={styles.h2_matn}>بيمه مورد نظر خود را انتخاب كنيد</h2>
                        <div className={styles.icons_box}>
                            <div className={styles.box_inner}>
                                <img src="/images/4.png" />
                                <span className={styles.matn_img}>پزشكی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/5.png" />
                                <span className={styles.matn_img}>آتش نشانی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/6.png" />
                                <span className={styles.matn_img}>موتور سيكلت</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/7.png" />
                                <span className={styles.matn_img}>مسافرتی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/8.png" />
                                <span className={styles.matn_img}>خدماتی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/9.png" />
                                <span className={styles.matn_img}>كرونا</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/10.png" />
                                <span className={styles.matn_img}>بيمه حوادث</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/11.png" />
                                <span className={styles.matn_img}>ساختمانی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/12.png" />
                                <span className={styles.matn_img}>بيمه درمانی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/13.png" />
                                <span className={styles.matn_img}>بدنه خودرو</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/14.png" />
                                <span className={styles.matn_img}>آتش سوزی</span>
                            </div>
                            <div className={styles.box_inner}>
                                <img src="/images/7.png" />
                                <span className={styles.matn_img}>موبايل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileJobs;