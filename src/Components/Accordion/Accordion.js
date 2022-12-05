import React, {useState} from 'react';

// Style
import styles from "./Accordion.module.css";

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ item }) => {

    const [open, setOpen] = useState(false)

    const handlerDrop = () => setOpen(prevState => !prevState)


    return (
        <div className={styles.freq_container}>
            <div className={styles.freq_title} onClick={handlerDrop}>
                <p>{item.heading}</p>
            </div>

            <FontAwesomeIcon icon={faAngleDown} className={`${styles.icon_drop} ${open && styles.icon_show}`} />

            <div className={`${styles.freq_content} ${open && styles.show}`}>
                <p>{item.content}</p>
            </div>
        </div>
    );
};

export default Accordion;