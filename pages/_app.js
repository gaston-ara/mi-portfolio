import '../styles/globals.css'
import { ContextProvider } from '../context/musicContext'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import * as ga from '../lib/ga'
import {useRouter} from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const path = useRouter().asPath;
  const [title, setTitle] = useState("")

  const getTitle = () => {
    if (path == "/"){
      setTitle("Inicio - Portfolio | Gastón Aragón")
    }
    if (path == "/aboutme"){
      setTitle("Sobre mí - Portfolio | Gastón Aragón")
    }
    if (path == "/projects"){
      setTitle("Proyectos - Portfolio | Gastón Aragón")
    }
    if (path == "/skills"){
      setTitle("Habilidades - Portfolio | Gastón Aragón")
    }
    if (path == "/contact"){
      setTitle("Contacto - Portfolio | Gastón Aragón")
    }
    if (path == "/en"){
      setTitle("Home - Portfolio | Gastón Aragón")
    }
    if (path == "/en/aboutme"){
      setTitle("About me - Portfolio | Gastón Aragón")
    }
    if (path == "/en/projects"){
      setTitle("Projects - Portfolio | Gastón Aragón")
    }
    if (path == "/en/skills"){
      setTitle("Skills - Portfolio | Gastón Aragón")
    }
    if (path == "/en/contact"){
      setTitle("Contact - Portfolio | Gastón Aragón")
    }
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
     //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    getTitle()
  },[path])

  return <ContextProvider><Layout title={title}><Component {...pageProps} /></Layout></ContextProvider> 
}

export default MyApp
