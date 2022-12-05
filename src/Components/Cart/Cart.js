import React, {useContext} from 'react';

// Context
import { CartContext } from "../../Context/CartContextProvider";

// Styles
import styles from "./Cart.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle, faTrashCan} from "@fortawesome/free-solid-svg-icons";


const Cart = (props) => {

    const { state, dispatch } = useContext(CartContext);
    const {code, photos, title , quantity} = props.data;

    return (
        <div className={styles.container}>
            <div className="d-flex align-items-center" id={styles.infoProduct}>
                <img className={styles.productImage} src={`https://api.taroneh.ir/storage/${code}/${photos}`} alt="prduct" />
                <div className={styles.data}>
                    <p>{title}</p>
                    <span>{state.price} تومان</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.btnNumber} onClick={() => dispatch({type: "INCREASE", payload: props.data})} >
                    <FontAwesomeIcon icon={faPlusCircle} className={styles.iconNum} />
                </button>
                <div>
                    <span className={styles.quantity}>{quantity}</span>
                </div>
                {
                    quantity > 1 ?
                        <button className={styles.btnNumber} onClick={() => dispatch({type: "DECREASE", payload: props.data})} >
                            <FontAwesomeIcon icon={faMinusCircle} className={styles.iconNum} />
                        </button> :
                        <button className={styles.btnNumber} onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>
                            <FontAwesomeIcon icon={faTrashCan} className={styles.iconNum} />
                        </button>
                }
            </div>
        </div>
    );
};

export default Cart;