import styles from "./contact.module.css"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
const Contact = () => {
    return (
        <div className={styles.container}>
           <div className={styles.wrapper}>

            <div className={styles.info}>
                <h2>Home Master</h2>
                <p>A leading provider of professional pest management solutions.</p>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>
                    Navigation
                </p>
                <ul className={styles.list}>
                    <li>Service</li>
                    <li>About us</li>
                    <li>Client Review</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>

                Service
                </p>
                <ul className={styles.list}>
                    <li>Carpet Cleaning</li>
                    <li>Bathroom Cleaning</li>
                    <li>Bedroom Cleaning</li>
                    <li>Floor Cleaning</li>
                </ul> 
            </div>
            <div className={styles.info}>
                <p className={styles.title}>

                Contact Us
                </p>
                <ul className={styles.list}>
                    <li><span><CiLocationOn /></span>4296 Coplin Avenue, Phoenix, Arizona, 56892</li>
                    <li><span><MdOutlineEmail /></span>chat@clearmaster.pro</li>
                    <li><span> <CiPhone /></span>+021 470-202-5506</li>
                </ul> 
            </div>

          </div>
        </div>

    )
}

export default Contact