import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Register.module.css';

// Validate
import { Validate } from '../Functions/Validate';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Image
import register from '../../assets/form/register.png';

const Register = () => {

    const [data, setData] = useState({
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState(false);

    const changeHandler = event => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }

    
    useEffect(() => {
        setErrors(Validate(data, "signup"))
    },[data])

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            alert("ok tank you!")
        } else {
            alert("please write input")
            setTouched({
                email: true,
                phone: true,
                password: true,
                confirmPassword: true
            })
        }
    }

    return (
        <div id={styles.container}>
            <div className='m-auto' id={styles.main}>
                <div id={styles.regisForm}>
                    <div className="d-flex m-auto" id={styles.text}>
                        <Link to="/" className='position-absolute' id={styles.icon}>
                            <FontAwesomeIcon icon={faXmark} />
                        </Link>
                        <Link to="/login" className="px-3" id={styles.join}>
                            <h5>ورود</h5>
                        </Link>
                        <Link to="#" className="px-4  pt-4 pb-3" id={styles.active}>
                            <h5>ثبت نام</h5>
                        </Link>
                    </div>


                    <div className="d-flex py-5" id={styles.flexrow}>
                        <div className="m-auto" id={styles.bgRegist}>
                            <img src={register} alt="login" />
                        </div>

                        <form onSubmit={submitHandler} className="form-outline d-flex" id={styles.form}>
                            <input
                                className="form-control"
                                type="email" 
                                name='email'
                                value={data.email} 
                                placeholder='ایمیل'
                                id={styles.input} 
                                onChange={changeHandler} 
                                />
                            {errors.email && touched.email && <span className={styles.message}>{errors.email}</span>}

                            <input 
                                className="form-control" 
                                type="phone" 
                                name="phone"
                                value={data.phone} 
                                id={styles.input} 
                                placeholder='شماره موبایل' 
                                onChange={changeHandler} 
                                />
                            {errors.phone && touched.phone && <span className={styles.message}>{errors.phone}</span>}

                            <div className='d-flex' id={styles.password}>
                                <div className="w-100">
                                    <input 
                                        className="form-control" 
                                        type="password" 
                                        name="password"
                                        value={data.password} 
                                        id={styles.input} 
                                        placeholder='رمز عبور'
                                        onChange={changeHandler}
                                         />
                                    {errors.password && touched.password && <span className={styles.message} id={styles.messagePass}>{errors.password}</span>}
                                </div>


                                <div className="w-100">
                                    <input 
                                        className="form-control" 
                                        type="password"
                                        name="confirmPassword" 
                                        value={data.confirmPassword} 
                                        placeholder='تکرار رمز' 
                                        id={styles.input} 
                                        onChange={changeHandler} 
                                         />
                                    {errors.confirmPassword && touched.confirmPassword && <span className={styles.message} id={styles.messageConf}>{errors.confirmPassword}</span>}
                                </div>

                            </div>

                            <div className='d-flex' id={styles.divBtn}>
                                <button type="submit" className="btn" id={styles.joinbtn}>ثبت نام</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register