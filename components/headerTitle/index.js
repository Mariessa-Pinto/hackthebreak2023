import styles from "./headertitle.module.css"

export default function HeaderTitle({

    

    color = "black",
    recommend,
}) {



    return (
        <>
            <div className={styles.main}>
                <hr className={styles.line1} />
                <h2 className={styles.test}>{recommend}</h2>
                <hr className={styles.line2} />

            </div>

        </>
    )
}

