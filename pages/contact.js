import contacto from '../styles/contact.module.css'
import IconoLinkedin from '../public/assets/icons/iconoLinkedin'
import IconoEmail from '../public/assets/icons/iconoEmail'

const Contacto = () => {
  return (
    <>
    <div className={contacto.content}>
      <div className={contacto.boxText}>
        <h2>Consultá cualquier duda, contame tu proyecto y pedí tu presupuesto</h2>
      </div>
      <div className={contacto.boxLinks}>
      <a href="mailto:gaston.ara.o@gmail.com"><IconoEmail/></a>
      <a href="https://www.linkedin.com/in/gaston-aragon/" target="_blank" rel="noopener noreferrer"><IconoLinkedin/></a>
      </div>
    </div>
    </>
  )
}

export default Contacto