import Head from 'next/head'
import Image from 'next/image'
import HomeView from '../components/HomeView'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[url('../images/Background.jpeg')] bg-fixed">
      <NavBar></NavBar>
      <Head>
        <title>Kamakhya Stores & Agency</title>
        <meta name="description" content="All your travel needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeView/>
      </main>
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
