import styles from '@/styles/Skills.module.css'
import HeaderTitle from '@/components/headerTitle'
import { headers } from '../data/headers.js'
import { position } from '../data/positions.js'
import { useState } from 'react';
import Navbar from '@/components/Navbar'
import Carousel from '@/components/carousel/index.js';
import ProgressCarousel from '@/components/carousel/progress.js';
import Image from "next/image";
import RecommendedCarousel from '@/components/carousel/recommended.js';

export default function Skills() {

  const [data, setData] = useState([...headers.heading]);
  const [data2, setData2] = useState([...position.progress]);


  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.hero}>
          <div className={styles.heroLCol}>
            <div className={styles.heroText}>
              <h1>Level up your portfolio, one assessment at a time.</h1>
              <p>Stand out from the crowd - choose from thousands of different assessments catered to the tech professionals. <br />Earn a badge today.</p>
            </div>
            <div className={styles.heroCTA}>
              <button className={styles.heroButton}>Browse Assessments</button>
            </div>
          </div>

          <div className={styles.heroRCol}>
            <Image src="/imgs/bannerman.png" width={500} height={300} />
          </div>

        </div>


        <div className={styles.topRow}>

          <div className={styles.LCol}>
            {data && data.map((info, index) => {
              if ("yes" == "yes") {
                return (
                  <div className={styles.skillsHeading}>
                    <HeaderTitle
                      key={index}
                      recommend={info.progress}

                    />

                  </div>

                )
              }
            })}
            <ProgressCarousel />
          </div>

          <div className={styles.RCol}>
            {data && data.map((info, index) => {
              if ("yes" == "yes") {
                return (
                  <div className={styles.skillsHeading}>
                    <HeaderTitle
                      key={index}
                      recommend={info.badge}

                    />

                  </div>

                )
              }
            })}

            <div className={styles.UXBadge}>
              <div className={styles.badge}>
                <Image src="/icons/Asset 8.svg" width={50} height={50} />
                <div className={styles.UXText}>
                  <b>UX/UI Design Fundamentals</b>
                  <p>Earned on March 9, 2023</p>
                </div>
              </div>
              <div className={styles.badge}>
                <Image src="/icons/Asset 6.svg" width={50} height={50} />
                <div className={styles.UXText}>
                  <b>Vanilla JavaScript Novice</b>
                  <p>Earned on March 1, 2023</p>
                </div>
              </div>
            </div>
          </div>

        </div>



        {data && data.map((info, index) => {
          if ("yes" == "yes") {
            return (
              <div>
                <HeaderTitle
                  key={index}
                  recommend={info.recommended}

                />
              </div>

            )
          }
        })}
        <RecommendedCarousel />


      </main>


    </>
  )
}