import contacto from '../styles/contact.module.css'
import IconoLinkedin from '../public/assets/icons/iconoLinkedin'
import IconoEmail from '../public/assets/icons/iconoEmail'
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';


const Contacto = () => {
  // Gsap Animation
  const contentContactRef = useRef();

  useEffect(() => {
      gsap.to(contentContactRef.current, { opacity: 1}); ;
  });
  return (
    <>
          <div className={contacto.content} ref={contentContactRef}>
      <div className={contacto.boxText}>
        <p>Consultá cualquier duda, contame tu proyecto y pedí tu presupuesto</p>
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