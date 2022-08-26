import React from 'react';
import styles from '../styles/components/cardContainer.module.css'

const CardContainer = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className={styles.container_card}>
                        <div className="container">
                            <div className="row">
                                <div className={`col-sm-12 col-md-12 col-lg-4 ${styles.container_card_inner}`}>
                                <div className={`card ${styles.card}`}>
                                    <img src="/images/bag.jpg" class="card-img-top"/>
                                    <div className={`card-body ${styles.card_body}`}>
                                        <h5 className="card-title">بیمه درمان مسافرتی</h5>
                                        <p className={`card-text`}>بیمه مسافرتی به منظور محافظت از مسافران در برابر خطرات احتمالی سفر به کار می‌رود. این بیمه تعداد زیادی از حوادث ناگواری که در یک سفر ممکن است اتفاق بیفتد را تحت پوشش قرار می‌دهد.</p>
                                        <a href="#" className={`card-link ${styles.card_link}`}>بيشتر بخوانيد...</a>
                                    </div>
                                    </div>
                                </div>
                                <div className={`col-sm-12 col-md-12 col-lg-4 ${styles.container_card_inner}`}>
                                <div className={`card ${styles.card}`}>
                                    <img src="/images/mobile.jpg" class="card-img-top"/>
                                    <div className={`card-body ${styles.card_body}`}>
                                        <h5 className="card-title">نکاتی درباره بیمه گوشی و تبلت</h5>
                                        <p className="card-text">با بیمه تجهیزات الکترونیک شما می توانید وسایل الکترونیکی و هوشمند خود از قبیل تلفن همراه ، لپ تاپ  و ... را تحت پوشش بیمه قرار داده و .......</p>
                                        <a href="#" className={`card-link ${styles.card_link}`}>بيشتر بخوانيد...</a>
                                    </div>
                                    </div>
                                </div>
                                <div className={`col-sm-12 col-md-12 col-lg-4 ${styles.container_card_inner}`}>
                                <div className={`card ${styles.card}`}>
                                    <img src="/images/ara.jpg" class="card-img-top"/>
                                    <div className={`card-body ${styles.card_body}`}>
                                        <h5 className="card-title">بیمه درمان مسافرتی</h5>
                                        <p className="card-text">بیمه مسافرتی به منظور محافظت از مسافران در برابر خطرات احتمالی سفر به کار می‌رود. این بیمه تعداد زیادی از حوادث ناگواری که در یک سفر ممکن است اتفاق بیفتد را تحت پوشش قرار می‌دهد.</p>
                                        <a href="#" className={`card-link ${styles.card_link}`}>بيشتر بخوانيد...</a>
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

export default CardContainer;