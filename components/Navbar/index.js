import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../MobileMenu'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image
                className={styles.logo}
                src={'/logo/logo.svg'}
                alt={'logo'}
                width={200}
                height={50}
            />
            <div className={styles.links}>
                <ul className={styles.list}>
                    <Link href={'/'}><li className={styles.hover}>Home</li></Link>
                    <Link href={'/skills'}><li className={styles.hover}>Skills</li></Link>
                    <Link href={'/job'}><li className={styles.hover}>Search </li></Link>
                </ul>
            </div>
            <div className={styles.buttonAndProfile}>
            <button className={styles.button}>Login</button>
                <Link href={'/profile'}>
                    <Image
                        src={'/imgs/profileIcon.png'}
                        alt={'profile icon'} 
                        width={80}
                        height={80}
                    />
                </Link>
            </div>
            <div className={styles.mobileHam}>
                <MobileMenu/>
            </div>
        </div>
    )
}