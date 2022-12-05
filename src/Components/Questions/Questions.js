import React from 'react';
import {Link} from "react-router-dom";

// Data
import { accordionData } from "./accordianData";

// Components
import Accordion from "../Accordion/Accordion";

// Styles
import styles from "./Questions.module.css"

// Fontawesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const Questions = () => {

    return (
        <section className={styles.section}>

            <div className={styles.ques_container}>

                <div className={styles.ques_header}>
                    <h3 className={styles.title_box}>سوالات متداول شما</h3>
                    <Link to="/" className="d-flex align-items-center">
                        <p className={styles.link_more}>مشاهده بیشتر</p>

                        <FontAwesomeIcon icon={faAngleLeft} className={styles.icon_left} />
                    </Link>
                </div>

                {
                    accordionData.slice(0,5).map((item, index) =>
                        <Accordion key={index} item={item} />
                    )
                }

            </div>

        </section>
    );
};

export default Questions;