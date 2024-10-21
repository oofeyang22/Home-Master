import styles from "./companies.module.css"
import Image from "next/image"

const Companies = () => {
    return (
        <div className={styles.imgContainer}>
            <Image src="/yamaha.png" alt="yamaha" width={100} height={100}/>
            <Image src="/pandora.png" alt="pandora" width={100} height={100}/>
            <Image src="/gardena.png" alt="gardena" width={100} height={100}/>
            <Image src="/sentinel.png" alt="sentinel" width={100} height={100}/>
            <Image src="/sunway.png" alt="sunway" width={100} height={100}/>
        </div>
    )
}

export default Companies;