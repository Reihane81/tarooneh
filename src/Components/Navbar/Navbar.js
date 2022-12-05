import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from "../../Context/CartContextProvider";

// Styles
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// JS bootstrap
import 'bootstrap/js/dist/modal';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Image
import logo from '../../assets/logo/logo.png';
import logoBig from '../../assets/logo/logo-footer.png';

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <nav id={styles.navbar} className="d-flex navbar-expand-lg bg-light fixed-top w-100 h-auto">

            <img src={logo} id={styles.brand} alt="logo" />
            
            <img src={logoBig} className="navbar-brand d-none m-auto" id={styles.logo} alt="logo" />

            <div className="w-100">
                <div className="collapse navbar-collapse border-bottom mt-3 pb-1 justify-content-between" id={styles.collapse1}>
                    
                    <ul className="d-flex mr-auto mt-2 mt-lg-0 p-0" id={styles.navheader}>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">بلاگ</Link>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <Link className="nav-link" to="#">داستان ما</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">درباره ما</Link>
                        </li>
                    </ul>

                    <form className="form-inline my-1 my-lg-0">
                        <div id={styles.input} className="form-control mr-sm-4 ">
                            <span>محصول موردنظر خود را جتسجو کنید</span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconSearch} />
                        </div>
                    </form>
                    
                    <div className="icons-nav ms-4 position-relative d-flex align-items-center">
                        <Link to="/login" className={styles.login}>
                            <button type="button" className="btn mx-4 text-white" id={styles.icon}>
                                ورود / ثبت نام<FontAwesomeIcon icon={faUser} id={styles.iconUser} className="icon pe-2" />
                            </button>
                        </Link>

                        <Link to="/cart">
                            {state.itemsCounter > 0 && <span>{state.itemsCounter}</span>}
                            <FontAwesomeIcon icon={faCartShopping} id={styles.iconShop} className="icon mx-4" />
                        </Link>
                    </div>
                
                </div> 
            
                <div className="collapse navbar-collapse w-100 justify-content-between" id={styles.collapse2} >
                    
                    <ul className="navbar-nav p-0" id={styles.menuNav}>
                        <li className="nav-item ps-5">
                            <Link className="nav-link" aria-current="page" to="#">آجیل</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link" to="#">خشکبار</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link" to="#">آلو</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link" to="#">خرما</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link" to="#">تخمه</Link>
                        </li>
                    </ul>


                    <button type="button" className="btn mx-4" id={styles.butShop} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        پیگیری خرید
                    </button>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" id={styles.modal_dialog}>
                            <div className="modal-content">
                                <div className="modal-header border-0">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex" id={styles.modal_box}>
                                    <button type="button" className="btn" id={styles.btn_modal}>
                                        پیگیری مرسوله
                                    </button>

                                    <input type="number" className={styles.input_modal}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>

            
    );
};

export default Navbar;