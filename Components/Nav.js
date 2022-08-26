import React from 'react';
import Image from 'next/image'
import styles from '../styles/components/nav.module.css'
import logo from '../public/images/logo.png'

const Nav = () => {
    return (
        <div className="container-fluid d-none d-lg-block">
            <div className="row align-items-center">
                <div className={`col-sm-12 d-none d-md-block mt-3 ${styles.nav_nav}`} id="desktop-nav">
                    <div className={`container ${styles.my_container}`}>
                        <div className="row">
                            <div className="col-sm-1">
                                <Image width={50} height={50} src={logo}/>
                            </div>
                            <div className="col-sm-9">
                              <nav className="navbar navbar-expand-md">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className={`navbar-nav ${styles.navbar}`}>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">خانه<span className="sr-only"></span></a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                اتوموبيل
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                اشخاص
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                مسوليت
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                مديران مشاغل
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                شعبات خسارت
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                شبكه فروش
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                آتش سوزی
                                            </a>
                                            <div className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">بيمه شخص ثالث</a>
                                                <a class="dropdown-item" href="#">بيمه بدنه</a>
                                            </div>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">بلاگ<span className="sr-only"></span></a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">همكاری با ما<span className="sr-only"></span></a>
                                        </li>
                                    </ul>
                                </div>
                              </nav>
                            </div>
                            <div className="col-sm-2">
                                <button className={styles.login_button}>ورود  ثبت  نام</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;