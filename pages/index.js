import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Carousel from '@/components/carousel'
import HeaderTitle from '@/components/headerTitle'
import { headers } from '../data/headers.js'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Home() {

  const [data, setData] = useState([...headers.heading]);


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

        <Carousel />
      </main>
    </>
  )
}
