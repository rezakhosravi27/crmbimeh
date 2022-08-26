import React from 'react';
import styles from '../styles/components/daftarche.module.css'

const Daftarche = () => {
    return (
        <div className="container">
            <div className="row d-none d-md-block">
                <div className="col-sm-12 p-0">
                    <div className={styles.container_daftarche}>
                            <div className="container">
                                <div className={`row ${styles.row}`}>
                                    <div className={`${styles.daftarche_inner}`}>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 mt-5">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <svg class="reminderIcon-0-2-59" height="70" viewBox="0 0 64 64" width="70" xmlns="http://www.w3.org/2000/svg"><g id="Calendar"><path d="m57 9h-6v3a3 3 0 0 1 -6 0v-3h-10v3a3 3 0 0 1 -6 0v-3h-10v3a3 3 0 0 1 -6 0v-3h-6a4 4 0 0 0 -4 4v8h58v-8a4 4 0 0 0 -4-4z" fill="#7fa2c7"></path><rect fill="#7fa2c7" height="5" rx="1" width="6" x="23" y="28"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="11" y="28"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="47" y="28"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="23" y="37"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="11" y="37"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="23" y="46"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="35" y="28"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="35" y="37"></rect><rect fill="#7fa2c7" height="5" rx="1" width="6" x="11" y="46"></rect><circle cx="49" cy="49" fill="#7fa2c7" r="12"></circle><g fill="#003494"><path d="m57 8h-5v-2a4 4 0 0 0 -8 0v2h-8v-2a4 4 0 0 0 -8 0v2h-8v-2a4 4 0 0 0 -8 0v2h-5a5 5 0 0 0 -5 5v40a5 5 0 0 0 5 5h28a1 1 0 0 0 0-2h-28a3.009 3.009 0 0 1 -3-3v-31h56v17a1 1 0 0 0 2 0v-26a5 5 0 0 0 -5-5zm-11-2a2 2 0 0 1 4 0v6a2 2 0 0 1 -4 0zm-16 0a2 2 0 0 1 4 0v6a2 2 0 0 1 -4 0zm-16 0a2 2 0 0 1 4 0v6a2 2 0 0 1 -4 0zm46 14h-56v-7a3.009 3.009 0 0 1 3-3h5v2a4 4 0 0 0 8 0v-2h8v2a4 4 0 0 0 8 0v-2h8v2a4 4 0 0 0 8 0v-2h5a3.009 3.009 0 0 1 3 3z"></path><path d="m30 29a2 2 0 0 0 -2-2h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 3v-3h4v3z"></path><path d="m18 29a2 2 0 0 0 -2-2h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 3v-3h4v3z"></path><path d="m52 34a2 2 0 0 0 2-2v-3a2 2 0 0 0 -2-2h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2zm-4-5h4v3h-4z"></path><path d="m30 38a2 2 0 0 0 -2-2h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 3v-3h4v3z"></path><path d="m18 38a2 2 0 0 0 -2-2h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 3v-3h4v3z"></path><path d="m28 45h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0 -2-2zm-4 5v-3h4v3z"></path><path d="m36 34h4a2 2 0 0 0 2-2v-3a2 2 0 0 0 -2-2h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2zm0-5h4v3h-4z"></path><path d="m34 41a2 2 0 0 0 2 2 1 1 0 0 0 0-2v-3h4a1 1 0 0 0 0-2h-4a2 2 0 0 0 -2 2z"></path><path d="m16 45h-4a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0 -2-2zm-4 5v-3h4v3z"></path><path d="m49 36a13 13 0 1 0 13 13 13.015 13.015 0 0 0 -13-13zm0 24a11 11 0 1 1 11-11 11.013 11.013 0 0 1 -11 11z"></path><path d="m54.778 44.808-7.778 7.778-3.535-3.536a1 1 0 0 0 -1.414 1.414l4.242 4.243a1 1 0 0 0 1.414 0l8.485-8.485a1 1 0 0 0 -1.414-1.414z"></path></g></g></svg>
                                                    </div>
                                                    <div className="col-sm-9 d-flex flex-column pt-1">
                                                        <p className={styles.para}>یادمون هست که یادتون بندازیم</p>
                                                        <p>یادآورو تنظیم کن خیالتو راحت کن !</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="row mt-3">
                                                            <div className="form-group col-sm-6">
                                                                <label>موضوع يادآور</label>
                                                                <select id="inputState" class="form-control">
                                                                    <option selected disabled>يادآور</option>
                                                                    <option>بيمه شخص ثالث</option>
                                                                    <option>بيمه بدنه</option>
                                                                    <option>بيمه موتور</option>
                                                                    <option>بيمه خودرو</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group col-sm-6">
                                                                <label>تاريخ يادآوری</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-sm-12 ">
                                                                <div className="form-group">
                                                                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                                     placeholder="شرخ مختصری از مطلبی كه ميخواهيد به شما يادآوری شود..."></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.container_button}>
                                                        <p>
                                                        <button className={styles.button_form}>ثبت يادآور</button>
                                                        </p>
                                                    </div>
                                                </form>
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

export default Daftarche;