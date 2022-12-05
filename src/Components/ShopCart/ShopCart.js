import React, {useContext} from 'react';
import {Link} from "react-router-dom";

// Context
import { CartContext } from "../../Context/CartContextProvider";
import { ProductsContext } from "../../Context/ProductContextProvider";

// Components
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";

// Styles
import styles from "./ShopCart.module.css"

// Images
import shop from "../../assets/shop/shop.jpg"


const ShopCart = () => {

    const { state } = useContext(CartContext);

    return (
        <div>
            <Navbar />

            <div className="mb-5">
                <div className={styles.container}>
                    <div className={styles.cartContainer}>
                        { state.selectedItems.map(item => <Cart key={item._id} data={item} />) }
                    </div>

                    {
                        state.itemsCounter > 0 &&
                        <div className={styles.payments}>
                            <p><span>قیمت کالاها</span> {state.itemsCounter}</p>
                            <p> <span>جمع سبد خرید</span>
                                <div className={styles.total}>
                                    {state.total} <span> تومان </span>
                                </div>
                            </p>

                            <Link to="/" className={styles.buttonContainer}>
                                <button type="button" className={styles.payButton}>نهایی کردن خرید</button>
                            </Link>
                        </div>
                    }
                </div>

                <div className={styles.shopContainer}>
                    {
                        state.itemsCounter === 0 &&
                        <div className={styles.complete}>
                            <img src={shop} className={styles.imgShop} alt="shop" />
                            <h3>سبد خرید شما خالی است!</h3>
                            <p>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                            <Link to="/">
                                <button type="button">صفحه اصلی</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopCart;