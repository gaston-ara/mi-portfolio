import aboutme from '../styles/aboutme.module.css'
import Image from 'next/image'
import profilePic from '../public/assets/toon.webp'
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';

const Aboutme = () => {
   // Gsap Animation
   const contentMeRef = useRef();

   useEffect(() => {
       gsap.to(contentMeRef.current, { opacity: 1, y:-10 }); ;
   });
  return (
      <>
        <div className={aboutme.content} ref={contentMeRef}>
          <div className={aboutme.image}>
            <Image src={profilePic} alt="Imágen del autor" width={160} height={160} />
          </div>
          <div className={aboutme.text}>
            <p>Ofrezco soluciones basadas en diseño y programación de sitios web y web apps. Me capacito en pos de realizar trabajos acordes a las necesidades y posibilidades de cada proyecto. Mi propósito es lograr ofrecer un servicio útil, honesto y confiable, priorizando al usuario y los objetivos del trabajo a desarrollar.
            </p>
          </div>
        </div>

      </>
  )
}

export default Aboutme