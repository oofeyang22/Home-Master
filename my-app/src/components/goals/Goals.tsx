"use client"
import styles from "./goals.module.css"

import { VscWorkspaceTrusted } from "react-icons/vsc";

import { GoThumbsup } from "react-icons/go";

import { IoRibbonOutline } from "react-icons/io5";

import { motion } from "framer-motion";


const Goals = () => {
    return(
        <motion.div className={styles.goalsContainer}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
            <div className={styles.box}>
                <div className={styles.icon}>
                    <div className={styles.work}><VscWorkspaceTrusted color="blue" size={26}/></div>
                </div>
                <p className={styles.goal}>Trustworthiness</p>
                <p className={styles.info}>Building trust with clients by being transparent,
                honest and reliable in all interactions,
                including respecting privacy
                </p>
            </div>
            <div className={styles.box}>
                <div className={styles.icon}>
                    <div className={styles.thumb}><GoThumbsup color="blue" size={28}/></div>
                </div>
                <p className={styles.goal}>Professionalism</p>
                <p className={styles.info}>Conducting all cleaning tasks with professionalism,
                including arriving on time, adhering to safety standards.
                </p>
            </div>
            <div className={styles.box}>
                <div className={styles.icon}>
                    <div className={styles.ribbon}>
                        <IoRibbonOutline color="blue" size={28}/>
                    </div>
                </div>
                <p className={styles.goal}>Customer Satisfaction</p>
                <p className={styles.info}>Conducting all cleaning tasks with professionalism,
                including arriving on time, adhering to safety standards.
                </p>
            </div>
        </motion.div>
    )
}

export default Goals;