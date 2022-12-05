import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Services from "../Services/Services";
import SpecialSale from '../SpecialSale/SpecialSale';
import NewProducts from "../NewProducts/NewProducts";
import Packages from "../Packages/Packages";
import Questions from "../Questions/Questions";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Context
import { ProductsContext } from '../../Context/ProductContextProvider';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faPhone} from '@fortawesome/free-solid-svg-icons';

// Banner
import banner from '../../assets/bg/banner.png';
import bgMobile from '../../assets/bg/bg-responsive.png';

// Styles
import styles from './Home.module.css';


const Home = () => {

    const products = useContext(ProductsContext);

    return (
        <>
            <Navbar />

            <div className="w-100 position-relative" id={styles.container}>
                <div>
                    <img src={banner} alt="banner" className="w-100 position-relative" id={styles.img} />

                    <img src={bgMobile} alt="banner" className="d-none w-100" id={styles.imgMobile} />
                </div>

                <h1 className="text-center" id={styles.text}>
                    <span className="mb-3 d-block">بازارچه خشکبار طارونه</span>
                    <span className={styles.title}>از بازار تا خونه راهی نیست</span>
                </h1>

                <Services />

                <SpecialSale productData={products} />
                <NewProducts productData={products}/>
                <Packages productData={products}/>

                <Questions />

                <section className={styles.section}>
                    <div id={styles.contactUs}>
                        <h5>برای دریافت مشاوره رایگان، همین حالا با کارشناسان ما تماس بگیرید</h5>
                        <button id={styles.btn}>
                            021-123456
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                        </button>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default Home;