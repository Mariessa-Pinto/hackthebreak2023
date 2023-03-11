import Link from "next/link";
import { useState } from "react";
import styles from './MobileMenu.module.css';
import Image from "next/image";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    
    return (
        <>
          <Image onClick={() => {
              setMenuOpen(!menuOpen);}} 
              className={styles.menu} 
              src={'/icons/Menu.svg'}
              width={40}
              height={40}
           />
              {
                menuOpen ? <>
                <div className={styles.fullMenu}>
                <ul className={styles.openMenu}>
                  <li className={styles.menuItem}><Link href="/" className={styles.text}>Home</Link></li>
                  <li className={styles.menuItem}><Link href="/skills" className={styles.text}>Skills</Link></li>
                  <li className={styles.menuItem}><Link href="/job" className={styles.text}>Search</Link></li>
                </ul></div>
                </> : <></>
              }   
        </>
    )
}