import Head from 'next/head'
import Navbar from './navbar'
import home from '../styles/Home.module.css'
import { WebContext } from '../context/musicContext'
import { useContext } from 'react'

const Layout = ({ children, title, content }) => {
    const {handleMusic, music} = useContext(WebContext);
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
            </Head>
            <Navbar/>
            <main>
                {children}
            <button onClick={handleMusic} className={home.music_btn}>
                {!music ? <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M3.61 6.41L9.19 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.14l7.41 7.47A2 2 0 0 0 18 32a2 2 0 0 0 .76-.15A2 2 0 0 0 20 30v-7.23l5.89 5.89c-.25.15-.49.29-.75.42a1 1 0 0 0 .9 1.79a14.4 14.4 0 0 0 1.31-.75l2.28 2.28L31 31L5 5ZM18 30l-7.73-7.77a1 1 0 0 0-.71-.23H4v-8h5.64a1 1 0 0 0 .71-.3l.26-.26L18 20.81Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M24.89 6.69A12.42 12.42 0 0 1 29 26.1l1.42 1.42a14.42 14.42 0 0 0-4.66-22.64a1 1 0 1 0-.87 1.8Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M22.69 12.62A6.27 6.27 0 0 1 25.8 18a6.17 6.17 0 0 1-1.24 3.71L26 23.13A8.15 8.15 0 0 0 27.8 18a8.28 8.28 0 0 0-4.1-7.11a1 1 0 1 0-1 1.73Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M18 6v9.15l2 2V6a2 2 0 0 0-3.42-1.41L12 9.17l1.41 1.41Z" class="clr-i-outline clr-i-outline-path-4"/><path fill="none" d="M0 0h36v36H0z"/></svg> 
                :
                <svg className={home.vinyl} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6zm5.531 3.063l-1.906 1.874l1.438 1.438l1.875-1.906zM16 11c-2.75 0-5 2.25-5 5s2.25 5 5 5s5-2.25 5-5s-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3zm0 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm-5.063 4.625l-1.874 1.906l1.406 1.407l1.906-1.875z"/></svg>
                }
                </button>
            </main>
        </div>
    )
}

export default Layout