import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';

// Component
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Context
import { ProductsContext } from "../../Context/ProductContextProvider";
import { CartContext } from "../../Context/CartContextProvider";

// functions
import { isInCart ,quantityCount } from "../../Helper/functions";

// Styles
import styles from "./Details.module.css";

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

const Details = () => {

    const data = useContext(ProductsContext);
    const [price, setPrice] = useState(0);
    const {state, dispatch} = useContext(CartContext);

    const params = useParams();
    const id = params.id;
    const  product = data.find(item => item._id === id);

    const focusHandler = (e) => {
        let res = product.types;
        res[0][0].values = [];
        Object.values(res[0][0].package).map(value => {
            return res[0][0].values.push(value);
        })
        
        if (e.target.value === "250") {
            setPrice(res[0][0].values[0])
            product.multiple = res[0][0].values[0]
            state.price = product.multiple

        } if (e.target.value === "500") {
            setPrice(res[0][0].values[1])
            product.multiple = res[0][0].values[1]
            state.price = product.multiple

        } else if (e.target.value === "1000"){
            setPrice(res[0][0].values[2])
            product.multiple = res[0][0].values[2]
            state.price = product.multiple
        }

        console.log(res[0][0].values[3])
    }


    if (product) {
        return (
            <div>
                <Navbar />

                <section className={styles.section}>
                    <div className={styles.container}>
                        <article className={styles.article}>
                            <section className={styles.secImg}>
                                <div className={styles.imgProduct}>
                                    <img src={`https://api.taroneh.ir/storage/${product.code}/${product.photos}`} alt="product" />
                                </div>
                            </section>

                            <section>
                                <div className={styles.divSec}>
                                    <div className={styles.totalInfo}>
                                        <div>
                                            <div className={styles.divInfo}>
                                                <div className={styles.codeProduct}>
                                                    <p className="ps-2"> کد محصول: </p>
                                                    <span> {product.code} </span>
                                                </div>

                                                <div className={styles.qualityProduct}>
                                                    <p className="ps-2"> درجه محصول: </p>
                                                    <span> درجه{product.quality} </span>
                                                </div>
                                            </div>

                                            <div className={styles.titleProduct}>
                                                <span> بسته: </span>
                                                <h6> {product.title} </h6>
                                            </div>

                                            <div className={styles.package}>
                                                <span> مقدار به گرم: </span>
                                                <div className={styles.gramInput}>
                                                    <input type="button"  value="250" onFocus={focusHandler}/>
                                                    <input type="button" value="500" onFocus={focusHandler}/>
                                                    <input type="button" value="1000" onFocus={focusHandler}/>
                                                </div>
                                            </div>

                                            <div className={styles.amount}>
                                                <span> قیمت: </span>
                                                <p> {price} </p>

                                            </div>

                                            <div className={styles.divNumber}>

                                                {
                                                    isInCart(state, product.id) ?
                                                    <button className={styles.btnNumber} onClick={() => dispatch({type: "INCREASE", payload: product})} >
                                                        <FontAwesomeIcon icon={faPlusCircle} className={styles.iconNum} />
                                                    </button> :

                                                    <button className={styles.btnAdd} onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>
                                                        <FontAwesomeIcon icon={faPlusCircle} className={styles.plusIcon} />
                                                        افزودن به سبد خرید
                                                    </button>
                                                }

                                                {quantityCount(state, product.id) > 0 && <span >{quantityCount(state, product.id)}</span> }

                                                {quantityCount(state, product.id) > 1 &&
                                                    <button className={styles.btnNumber} onClick={() => dispatch({type: "DECREASE", payload: product})}>
                                                        <FontAwesomeIcon icon={faMinusCircle} className={styles.iconNum} />
                                                    </button>
                                                }

                                                {quantityCount(state, product.id) === 1 &&
                                                    <button className={styles.btnNumber} onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}>
                                                        <FontAwesomeIcon icon={faTrashCan} className={styles.iconNum} />
                                                    </button>
                                                }

                                            </div>
                                        </div>

                                        <div className={styles.attribute}>
                                            <h4> خواص: </h4>
                                            <p> {product.attributes} </p>
                                        </div>
                                    </div>

                                    <div className={styles.aboutProduct}>
                                        <h4> درباره محصول: </h4>
                                        <p> {product.Description} </p>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
};

export default Details;