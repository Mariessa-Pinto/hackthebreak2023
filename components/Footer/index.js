import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.colOne}>
                <Image
                    src={'/logo/logoWhite.svg'}
                    alt={'logo in white'}
                    width={150}
                    height={100}
                />
                <h4 className={styles.header}>Subscribe to receive alerts about jobs</h4>
                <div className={styles.form}>
                    <input type="email" id="email" name="email" placeholder='Your email' className={styles.input}></input>
                    <button className={styles.button}>Submit</button>
                </div>
            </div>
            <div className={styles.colTwo}>
                <h4 className={styles.header}>Socials</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>LinkedIn</li>
                        <li className={styles.listItem}>Facebook</li>
                        <li className={styles.listItem}>Twitter</li>
                    </ul>
            </div>
            <div className={styles.colThree}>
                <h5 className={styles.header}>About</h5>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>The Company</li>
                        <li className={styles.listItem}>Guidelines</li>
                        <li className={styles.listItem}>Privacy & Terms</li>
                        <li className={styles.listItem}>Careers</li>
                    </ul>
            </div>
            <div className={styles.colFour}>
                <h4 className={styles.header}>Help</h4>
                <ul className={styles.list}>
                    <li className={styles.listItem}>The Company</li>
                    <li className={styles.listItem}>FAQs</li>
                    <li className={styles.listItem}>Manage Account</li>
                    <li className={styles.listItem}>Talent Solutions</li>
                </ul>
            </div>
            <div className={styles.colFive}>
                <form className={styles.language}>
                    <label className={styles.header} for="language">Select Language</label>
                    <select name="lang" id="lang" className={styles.select}>
                        <option value="en">English - EN</option>
                        <option value="fr">French - FR</option>
                        <option value="ger">German - GER</option>
                        <option value="mdn">Mandarin - MDN</option>
                    </select>
                </form>
            </div>
        </div>
    )
}