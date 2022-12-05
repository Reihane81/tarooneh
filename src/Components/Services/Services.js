import React from 'react';

// Styles
import styles from "./Services.module.css";

// Images
import discount from "../../assets/service/discount.png"
import support from "../../assets/service/support.png"
import post from "../../assets/service/post.png"

const Services = () => {
    return (
        <section className={styles.service_section}>
            <div className={styles.service_container}>
                <div className={styles.service_items}>
                    <div className={styles.item_img}>
                        <img src={discount} alt="discount" />
                    </div>
                    <h3 className={styles.title}>مناسب ترین قیمت</h3>
                    <p className={styles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                </div>

                <div className={styles.service_items}>
                    <div className={styles.item_img}>
                        <img src={support} alt="support" />
                    </div>
                    <h3 className={styles.title}>مشاوره و پشتیبانی</h3>
                    <p className={styles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                </div>

                <div className={styles.service_items}>
                    <div className={styles.item_img}>
                        <img src={post} alt="post" />
                    </div>
                    <h3 className={styles.title}>ارسال سریع</h3>
                    <p className={styles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;