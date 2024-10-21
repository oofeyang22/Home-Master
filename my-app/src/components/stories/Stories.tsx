import Image from "next/image"
import { Check } from "../check/Check"
import styles from "./stories.module.css"
const Stories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div ><Image src="/woman2.jpg" alt="woman2" width={400} height={350} className={styles.img1}/></div>
                <div ><Image src="/woman4.jpg" alt="woman4" width={200} height={150} className={styles.img2}/></div>
            </div>
            <div className={styles.storyContainer}>
                <p className={styles.title}>Behind the HomeMaster<br/> Company Stories.</p>
                <p className={styles.text}>Explore the core mission and vision that drives
                    us everyday. At HomeMaster,<br/> we are not just
                    about cleaning homes;<br/> we're about making a
                    difference in the lives of our clients and our community.
                </p>
                <div className={styles.points}>
                    <div className={styles.flex}>
                        <p><Check/></p>
                        <p className={styles.bold}>Clean Homes, happy hearts</p>
                    </div>
                    <div className={styles.flex}>
                        <p><Check/></p>
                        <p className={styles.bold}>Sparkle in every space</p>
                    </div>
                    <div className={styles.flex}>
                        <p><Check/></p>
                        <p className={styles.bold}>Purify. Refresh. Revitalize</p>
                    </div>
                    <div className={styles.flex}>
                        <p><Check/></p>
                        <p className={styles.bold}>Cleanliness standards</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stories