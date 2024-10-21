import styles from "./activities.module.css"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";

const activities = [
    {
        skill: "Regular Home Cleaning",
        description: "Conducting all cleaning tasks with professionalism, including arriving on time",
        img: "/cleaning1.jpg"
    },
    {
        skill: "Deep Cleaning",
        description: "Conducting all cleaning tasks with professionalism, including arriving on time",
        img: "/cleaning2.jpg"
    },
    {
        skill: "Move-In/Out Cleaning",
        description: "Conducting all cleaning tasks with professionalism, including arriving on time",
        img: "/cleaning4.jpg"
    },
    {
        skill: "Post-Construction Cleaning",
        description: "Conducting all cleaning tasks with professionalism, including arriving on time",
        img: "/cleaning6.jpg"
    },
    {
        skill: "Commercial Cleaning",
        description: "Conducting all cleaning tasks with professionalism, including arriving on time",
        img: "/cleaning5.jpg"
    },
    {
        skill: "Specialized Cleaning",
        description: "Conducting all cleaning tasks with professionalism, including arriving on time",
        img: "/cleaning7.jpg"
    },
]
const Activities = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.pride}>We Take Pride for Our Services</h1>
            <div className={styles.boxContainer}>
                {
                    activities.map((activity) => (
                        <div className={styles.wrapper} key={activity.skill}>

                            <div>
                                <div className={styles.text}>
                                    <p className={styles.title}>{activity.skill}</p>
                                    <div className={styles.icon}>
                                        <MdArrowOutward />
                                    </div>
                                </div>
                                <p className={styles.description}>{activity.description}</p>
                            </div>
                            <div className={styles.imgContainer}>
                                <Image src={activity.img} alt="cleaning1" width={350} height={400} className={styles.img}/>
                            </div>
                    </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Activities;