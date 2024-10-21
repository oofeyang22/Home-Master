

import styles from "./percent.module.css"
import Ratings from "../ratings/Ratings";
import Image from "next/image";
const Percent = () => {
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>Find Standard Cleaning With<br/> Personal Touch</h1>
                <p>
                Explore the core mission and vision that drives
                    us everyday. At HomeMaster,<br/> we are not just
                    about cleaning homes;<br/> we're about making a
                    difference in the lives of our clients and our community.
                </p>
                <div>
                    <Ratings/>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/cleaning5.jpg" alt="cleaning5" width={200} height={150} className={styles.img1}/>
                <Image src="/cleaning6.jpg" alt="cleaning6" width={300} height={200} className={styles.img2}/>
            </div>
        </div>
    )
}

export default Percent;