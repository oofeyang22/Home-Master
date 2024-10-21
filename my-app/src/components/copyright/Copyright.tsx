import styles from "./copyright.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
const Copyright = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <p>Follow us</p>
                    <div className={styles.flex}>
                        <div>
                        <Link href=""><FaInstagram /></Link>
                        </div>
                        <div>
                        <Link href=""><FaXTwitter /></Link>
                        </div>
                        <div>
                        <Link href=""><FaFacebookF /></Link>
                        </div>

                    </div>
                </div>
                <div className={styles.copy}>
                    <p>copyright ©2024 Home Master. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Copyright