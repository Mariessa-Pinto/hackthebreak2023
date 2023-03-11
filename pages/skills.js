import styles from '@/styles/Skills.module.css'
import HeaderTitle from '@/components/headerTitle'
import { headers } from '../data/headers.js'
import { useState } from 'react';

export default function Skills() {

  const [data, setData] = useState([...headers.heading]);


  return (
    <>
      <main>
        <div className={styles.hero}>


          <div className={styles.heroText}>
            <h1>Level up your portfolio, one assessment at a time.</h1>
            <p>Stand out from the crowd - choose from thousands of different assessments catered to the tech professionals. <br />Earn a badge today.</p>
          </div>
          <div className={styles.heroCTA}>
            <button className={styles.heroButton}>Browse Assessments</button>
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

      </main>


    </>
  )
}