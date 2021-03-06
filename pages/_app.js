import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Kamakhya Stores & Agency</title>
    <meta name="description" content="All your travel needs" />
  </Head>
  <div className="bg-[url('../images/Background.jpeg')] bg-fixed">
    <NavBar/>
    <Component {...pageProps}/>
    <Link href={`https://wa.me/919085328111`} passHref>
      <FontAwesomeIcon icon={faWhatsapp} className="absolute top-3 right-3 h-16 w-16 animate-bounce cursor-pointer"/>
    </Link>
  </div>
  <Footer/>
  </>
}


export default MyApp
