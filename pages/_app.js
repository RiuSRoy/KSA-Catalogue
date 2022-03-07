import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <div className="bg-[url('../images/Background.jpeg')] bg-fixed">
    <NavBar/>
    <Component {...pageProps}/>
  </div>
  <Footer/>
  </>
}

export default MyApp
