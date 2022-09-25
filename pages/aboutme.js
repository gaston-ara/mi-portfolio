import aboutme from '../styles/aboutme.module.css'

const Aboutme = () => {
  return (
      <>
        <div className={aboutme.content}>
          <div className={aboutme.image}>
            <img src="/assets/toon.jpg" alt="" />
          </div>
          <div className={aboutme.text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ducimus accusamus corporis saepe ratione accusantium iste, molestiae optio? Voluptatibus dolores beatae in quas expedita hic eligendi, minima cum quod ipsa.
            </p>
          </div>
        </div>

      </>
  )
}

export default Aboutme