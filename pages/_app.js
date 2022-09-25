import '../styles/globals.css'
import { ContextProvider } from '../context/musicContext'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return <ContextProvider><Layout><Component {...pageProps} /></Layout></ContextProvider> 
}

export default MyApp
