import projects from "../styles/Projects.module.css"
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';

const Proyectos = () => {
  const playVideo = (e) => {
    return e.target.play();
  }
  const pauseVideo = (e) => {
    return e.target.pause();
  }
  const openVideo = (e) => {
    e.target.requestFullscreen()
  }

  // Gsap Animation
  const contentProjectsRef = useRef();

  useEffect(() => {
      gsap.to(contentProjectsRef.current, { opacity: 1, y:-10 }); ;
  });
  return (
    <>
      <div className={projects.content} ref={contentProjectsRef}>
        <div className={projects.videosContent}>
          <div className={projects.videoBox}>
            <video poster="/assets/restaurante_poster.webp" onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={(e) => playVideo(e)} muted loop className={projects.videos}>
              <source src="/assets/elrestaurante-portfolio.webm" type="video/webm" />
            </video>
            <div className={projects.textVideoBox}>
              <p className={projects.skills}>Html - Css - Sass - Bootstrap</p>
              <p className={projects.name}>El Restaurante </p>
              <p className={projects.description}>Sitio web para restaurante</p>
            </div>
          </div>
          <div className={projects.videoBox}>
            <video poster="/assets/blackdog_poster.webp" onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/blackdog-portfolio.webm" type="video/webm" />
            </video>
            <div className={projects.textVideoBox}>
              <p className={projects.skills}>Html - Css - Javascript - Bootstrap</p>
              <p className={projects.name}>BlackDog </p>
              <p className={projects.description}>Simulador de tienda online</p>
            </div>
          </div>
          <div className={projects.videoBox}>
            <video poster="/assets/modernclix_poster.webp" onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/modernclix-portfolio.webm" type="video/webm" />
            </video>
            <div className={projects.textVideoBox}>
              <p className={projects.skills}>React.js - Firebase - Sass - Bootstrap</p>
              <p className={projects.name}>ModernClix</p>
              <p className={projects.description}>Simulador de tienda online</p>
            </div>
          </div>
        </div>
        {/* <div className={projects.videosContent}>
          <div className={projects.videoBox}>
            <video onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/elrestaurante-portfolio.mp4" type="video/mp4" />
            </video>
            <div className={projects.textVideoBox}>
              <p>BlackDog</p>
              <p>HTML - CSS - JAVASCRIPT</p>
              <p>Simulador realizado con html, css y javascript</p>
            </div>
          </div>
          <div className={projects.videoBox}>
            <video onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/blackdog-portfolio.mp4" type="video/mp4" />
            </video>
            <div className={projects.textVideoBox}>
              <p>BlackDog</p>
              <p>HTML - CSS - JAVASCRIPT</p>
              <p>Simulador realizado con html, css y javascript</p>
            </div>
          </div>
          <div className={projects.videoBox}>
            <video onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/modernclix-portfolio.mp4" type="video/mp4" />
            </video>
            <div className={projects.textVideoBox}>
              <p>BlackDog</p>
              <p>HTML - CSS - JAVASCRIPT</p>
              <p>Simulador realizado con html, css y javascript</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Proyectos