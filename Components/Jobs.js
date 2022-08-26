import React from 'react';
import styles from '../styles/components/Jobs.module.css'

const Jobs = () => {
    return (
        <div className="container-fluid d-none d-sm-block">
            <div className="row">
                <div className="col-sm-12 p-0">
                    <div className={styles.container_jobs}>
                        <div className="row">
                            <div className="container-fluid d-flex justify-content-end">
                                <div className="col-sm-12 col-md-8 col-lg-6 mt-3">
                                    <h2 className={styles.h2_matn}>بيمه مورد نظر خود را انتخاب كنيد</h2>
                                    <div className="row">
                                        <div className="col-sm-12 mt-5">
                                            <div className="row justify-content-center mb-1">
                                                <div className="col-sm-3 col-md-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/4.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>آتش نشانی</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/5.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>دكتر</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/6.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>موتور سيكلت</p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center mb-1">
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/7.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>مسافرتی</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/8.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>خدماتی</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/9.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>كرونا</p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center mb-1">
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/10.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>بيمه حوادث</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/11.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>ساختمانی</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/12.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>بيمه درمانی</p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center mb-1">
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/13.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>بدنه خودرو</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/14.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>آتش سوزی</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="/images/10.png" className={styles.jobs_icons}/>
                                                    <p className={styles.para_icons}>موبايل</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;