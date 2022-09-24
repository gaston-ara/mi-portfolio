import Layout from "../components/layout"
import aboutme from '../styles/aboutme.module.css'

const Aboutme = () => {
  return (
    <Layout>
      <div className={aboutme.background}>
        <video muted autoPlay="true" loop="true" id={aboutme.bgVideo}>
          <source src="/assets/hero_portfolio.mp4" type="video/mp4" />
        </video>
        <h1>Sobre mí</h1>
        <div className={aboutme.content}>
          <div className={aboutme.image}>
            <img src="/assets/woman-using-smartphone-social-media-conecpt.jpg" alt="" />
          </div>
          <div className={aboutme.text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ducimus accusamus corporis saepe ratione accusantium iste, molestiae optio? Voluptatibus dolores beatae in quas expedita hic eligendi, minima cum quod ipsa.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Aboutme