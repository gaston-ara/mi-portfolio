import projects from "../styles/Projects.module.css"

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
  return (
    <>
      <div className={projects.content}>
        <div className={projects.videosContent}>
          <div className={projects.videoBox}>
            <video onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={(e) => playVideo(e)} muted loop className={projects.videos}>
              <source src="/assets/elrestaurante-portfolio.mp4" type="video/mp4" />
            </video>
            <div className={projects.textVideoBox}>
              <p>El Restaurante</p>
              <p>Html - Css - Sass - Bootstrap</p>
              <p>Sitio web para restaurante</p>
            </div>
          </div>
          <div className={projects.videoBox}>
            <video onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/blackdog-portfolio.mp4" type="video/mp4" />
            </video>
            <div className={projects.textVideoBox}>
              <p>BlackDog</p>
              <p>Html - Css - Javascript - Bootstrap</p>
              <p>Simulador de tienda online</p>
            </div>
          </div>
          <div className={projects.videoBox}>
            <video onClick={(e) => openVideo(e)} onMouseLeave={(e) => pauseVideo(e)} onMouseEnter={playVideo} muted loop className={projects.videos}>
              <source src="/assets/modernclix-portfolio.mp4" type="video/mp4" />
            </video>
            <div className={projects.textVideoBox}>
              <p>ModernClix</p>
              <p>React.js - Firebase - Sass - Bootstrap</p>
              <p>Simulador de tienda online</p>
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