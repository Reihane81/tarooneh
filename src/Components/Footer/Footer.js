import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


// Styles
import styles from './Footer.module.css';

// Image
import namad1 from "../../assets/support/e-namad-001.png";
import namad2 from "../../assets/support/e-namad-002.png";
import namad3 from "../../assets/support/e-namad-003.png";
import logoBig from '../../assets/logo/logo-footer.png';


const Footer = () => {
    return (
        <footer id={styles.container}>
            <div className={styles.footerItem}>
                <div className={styles.aboutUs}>
                    <h4 className="pb-4"> درباره طارونه </h4>
                    <div>
                        <img src={logoBig} alt="logo" className={styles.imgFooter} />
                        <p className={styles.textImg}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                    </div>
                </div>

                <div className={styles.quickAccess}>
                    <h4 className="mb-3"> دسترسی سریع </h4>

                    <Link to="#" className={styles.item}> قوانین </Link>
                    <Link to="#" className={styles.item}> نحوه خرید </Link>
                    <Link to="#" className={styles.item}> سوالات متداول </Link>
                    <Link to="#" className={styles.item}> بلاگ </Link>
                    <Link to="#" className={styles.item}> تماس با ما </Link>
                    <Link to="#" className={styles.item}> درباره ما </Link>

                    <div className={styles.divMobile}>
                        <Link to="#" className={styles.itemMobile}> قوانین </Link>
                        <Link to="#" className={styles.itemMobile}> نحوه خرید </Link>
                        <Link to="#" className={styles.itemMobile}> سوالات متداول </Link>
                        <Link to="#" className={styles.itemMobile}> بلاگ </Link>
                        <Link to="#" className={styles.itemMobile}> تماس با ما </Link>
                        <Link to="#" className={styles.itemMobile}> درباره ما </Link>
                    </div>

                </div>

                <div className={styles.support}>
                    <h4 className="mb-3">پشتیبانی، رضایت</h4>
                    <div className="d-flex mb-3" id={styles.namadSupport}>
                        <img src={namad1} alt="namad1" />
                        <img src={namad2} alt="namad2" />
                        <img src={namad3} alt="namad3" />
                    </div>

                    <div className="d-flex justify-content-between py-3" id={styles.call}>
                        <p> تماس تلفنی </p>
                        <p> 021-123456789 </p>
                    </div>

                    <div className={styles.socialMedia}>
                        <div className={styles.itemSocial}>
                            <FontAwesomeIcon icon={faFacebookF} className={styles.iconSocial} />
                        </div>
                        <div className={styles.itemSocial}>
                            <FontAwesomeIcon icon={faInstagram} className={styles.iconSocial} />
                        </div>
                        <div className={styles.itemSocial}>
                            <FontAwesomeIcon icon={faLinkedinIn} className={styles.iconSocial} />
                        </div>
                        <div className={styles.itemSocial}>
                            <FontAwesomeIcon icon={faTelegram} className={styles.iconSocial} />
                        </div>
                        <div className={styles.itemSocial}>
                            <FontAwesomeIcon icon={faTwitter} className={styles.iconSocial} />
                        </div>
                    </div>
                </div>

                <div className={styles.infoUs}>
                    <h5> درباره طارونه </h5>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>

            </div>

            <div className={styles.divP}>
                <p className="text-lg-center">
                    کلیه حقوق این سایت متعلق به طارونه می باشد.
                </p>
            </div>

        </footer>
    );
};

export default Footer;