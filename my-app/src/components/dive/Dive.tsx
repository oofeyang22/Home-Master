import styles from "./dive.module.css"
import Image from "next/image"
const Dive = () => {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div>
                <h1 className={styles.h1}>Get Started on Your Journey<br/> to a Cleaner Home today!</h1>
                <button className={styles.button}>Let's Dive in</button>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/cleaning7.jpg" alt="cleaning7" width={350} height={200}/>
            </div>
            </div>

        </div>
    )
}

export default Dive;
