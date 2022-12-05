import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Image
import login from '../../assets/form/login.png';

const Login = () => {

    const [input, setInput] = useState();

    const changeHandler = event => {
        setInput({
            input: event.target.value
        })
    }

    return (
        <div id={styles.container}>
            <div className='m-auto' id={styles.main}>
                <div id={styles.loginForm}>
                    <div className="d-flex m-auto" id={styles.text}>
                        <Link to="/" className='position-absolute' id={styles.icon}>
                            <FontAwesomeIcon icon={faXmark} />
                        </Link>
                        <Link to="/login" className="px-4  pt-4 pb-3" id={styles.active}>
                            <h5>ورود</h5>
                        </Link>
                        <Link to="/register" className="px-3" id={styles.join}>
                            <h5>ثبت نام</h5>
                        </Link>
                    </div>


                    <div className="d-flex py-5" id={styles.flexrow}>
                        <form className="form-outline d-flex" id={styles.form}>
                            <input type="email" className="form-control" id={styles.input} placeholder='ایمیل یا شماره موبایل' value={input} onChange={changeHandler} />

                            <input type="password" className="form-control" id={styles.input} placeholder='رمز عبور' value={input} onChange={changeHandler} />

                            <div className="col d-flex" id={styles.reset}>
                                <p>رمز عبور خود را فراموش کردم؟  
                                    <Link to="#!" className='pe-2'>بازیابی رمز عبور</Link>
                                </p>
                            </div>

                            <div className='d-flex' id={styles.divBtn}>
                                <button type="button" className="btn" id={styles.passwordbtn}>ورود با رمز یکبار مصرف</button>
                                <button type="button" className="btn" id={styles.joinbtn}>ورود</button>
                            </div>
                        </form>


                        <div className="m-auto w-50 pe-5" id={styles.bgLogin}>
                            <img src={login} alt="login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;