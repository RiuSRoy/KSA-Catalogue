import Head from 'next/head'
import Image from 'next/image'
import HomeView from '../components/HomeView'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kamakhya Stores & Agency</title>
        <meta name="description" content="All your travel needs" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}>
        <HomeView/>
      </main>
      

    </>
  )
}
