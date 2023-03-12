import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Carousel from '@/components/carousel'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/index.js'

export default function Home() {

  return (
    <>
      <Head>
        <title>Jobascript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.intro}>
          <div className={styles.leftCol}>
            <div className={styles.top}>
              <h1 className={styles.welcome}>Welcome,</h1>
              <h1 className={styles.jimmy}>Jimmy</h1>
              <p className={styles.para}>Seamless, agile, one-way stop to find all your job-seeking needs. <strong>JobaScript</strong> is the next generation's job search hack to guide designers and developers to get hired efficiently. Earn your badges, upgrade your skills - we have the courses you're looking for.</p>
            </div>
            <div className={styles.bottom}>
              <p className={styles.smallHeader}>Job Finder</p>
              <p className={styles.paraTwo}>Take your job match-making quiz, and let us do the rest.</p>
              <button className={styles.quizButton}>Take the Quiz</button>
            </div>
          </div>
          <div className={styles.rightCol}>
            <h2>Find your job today</h2>
            <div className={styles.topRight}>
              <div className={styles.entryBox}>
                <p className={styles.entry}>Entry-Level</p>
                <p className={styles.jobs}>172.4k Jobs</p>
              </div>
              <div className={styles.remoteBox}>
                <Image
                  src={'/icons/boxIcon.svg'}
                  alt={'guy at computer icon'}
                  width={100}
                  height={100}
                />
                <p className={styles.entry}>Remote Friendly</p>
                <p className={styles.jobs}>388.2k Jobs</p>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <p className={styles.entry}>Full-time Positions</p>
              <p className={styles.jobs}>201.8k Jobs</p>
            </div>
          </div>
        </div>


        {/* <Carousel/> */}
        <Footer/>
      </main>
    </>
  )
}
