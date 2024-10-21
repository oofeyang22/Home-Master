
import styles from "./statement.module.css"
import { Check } from "../check/Check";
import Image from "next/image";
const Statement = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <p className={styles.title}>Our Commitment to Excellent Experiences</p>
                    <p className={styles.text}>Explore the core mission and vision that drives
                    us everyday. At HomeMaster,<br/> we are not just
                    about cleaning homes;<br/> we're about making a
                    difference in the lives of our clients and our community.</p>
                    <div>
                        <button className={styles.button}>Request Service</button>
                    </div>
                    <div className={styles.points}>
                        <div className={styles.flex}>
                            <p><Check color="white"/></p>
                            <p className={styles.bold}>Eco-friendly Cleaning Products</p>
                        </div>
                        <div className={styles.flex}>
                            <p><Check color="white"/></p>
                            <p className={styles.bold}>Customized Cleaning Packages</p>
                        </div>

                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div>
                        <Image src="/cleaning1.jpg" alt="cleaning1" width={400} height={350} className={styles.img1}/>
                    </div>
                    <div>
                        <Image src="/cleaning2.jpg" alt="cleaning2" width={230} height={200} className={styles.img2}/>
                    </div>
                    <div>
                        <Image src="/woman3.jpg" alt="woman3" width={230} height={200} className={styles.img3}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Statement;