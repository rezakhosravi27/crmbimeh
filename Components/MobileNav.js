import React ,{useState} from 'react';
import styles from '../styles/components/MobileNav.module.css'
import MobileMenu from './MobileMenu';

const MobileNav = () => {
    const [state , setstate] = useState(false)
    const clickHandler = () => {
        setstate(pre => !pre)
    }

    return (
        <div className="container d-lg-none">
            <div className="row">
                <div className={styles.mobile_nav}>
                    {state ? <MobileMenu setstate={setstate}/> : null}
                    <i className={`fa fa-bars ${styles.icon_bars}`} onClick={clickHandler}></i>
                    <img src="/images/logo.png" className={styles.mobile_img_logo}/>
                    <i className={`fa fa-user ${styles.icon_user}`}></i>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;