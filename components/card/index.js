import styles from "./card.module.css"

export default function Card({

    company,
    title,
    contract,
    remote,
    fulltime,
    position,
    image,
    area }) {

    return (
        <>
            <div className={styles.main}>

                <div className={styles.jobs}>
                    <div className={styles.firstRow}>
                        <div className={styles.contract}>{contract}</div>
                        <div className={styles.remote}> {remote}</div>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.fulltime}>{fulltime}</div>
                        <div className={styles.position}>{position}</div>
                    </div>
                    <h3>{company} | {title}</h3>
                </div>

            </div>
        </>
    )
}