import React from 'react';
import styles from '../styles/components/motor.module.css'

const Motor = () => {
    return (
        <>
        <div className="container-fluid mt-5 d-none d-md-block">
            <div className="row justify-content-space-around">
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center p-5 order-sm-1">
                    <p className="h6">شما میتونید خیلی راحت در کمترین زمان بیمه نامه ی مورد نظرتون رو انتخاب و سفارش بدید.</p>
                </div>
                <div className="col-sm-12 col-md-6 order-sm-2">
                    <img src="/images/motor.jpg" className={styles.motor_img}/>
                </div>
            </div>
        </div>
        <div className="container-fluid mt-5 d-md-none">
        <div className="row justify-content-space-around">
            <div className="col-sm-12 col-md-6 order-sm-2">
                <img src="/images/motor.jpg" className={styles.motor_img}/>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center p-5 order-sm-1">
                <p className="h5">شما میتونید خیلی راحت در کمترین زمان بیمه نامه ی مورد نظرتون رو انتخاب و سفارش بدید.</p>
            </div>
        </div>
    </div>
    </>
    );
};

export default Motor;