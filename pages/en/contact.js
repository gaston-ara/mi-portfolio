import contacto from '../../styles/contact.module.css'
import IconoLinkedin from '../../public/assets/icons/iconoLinkedin'
import IconoEmail from '../../public/assets/icons/iconoEmail'
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';


const Contacto = () => {
  // Gsap Animation
  const contentContactRef = useRef();

  useEffect(() => {
      gsap.to(contentContactRef.current, { opacity: 1, y:-10 }); ;
  });
  return (
    <>
          <div className={contacto.content} ref={contentContactRef}>
      <div className={contacto.boxText}>
        <p>Ask any questions, tell me about your project and ask for your budget</p>
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