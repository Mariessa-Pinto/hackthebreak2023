import styles from "components/card/inprogress.module.css"
import Image from "next/image";

export default function ProgressCard({

    image,
    area }) {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.img} style={{borderRadius: '25px', overflow: "hidden"}}>
                    <Image src={image} layout='fill' objectFit='cover'/>
                </div>
                <div className={styles.area}>
                    {area}
                </div>
            </div>

        </>
    )
}