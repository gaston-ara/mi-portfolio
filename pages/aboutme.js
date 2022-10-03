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
       gsap.to(contentMeRef.current, { opacity: 1 }); ;
   });
  return (
      <>
        <div className={aboutme.content} ref={contentMeRef}>
          <div className={aboutme.image}>
            <Image src={profilePic} alt="Imágen del autor" width={160} height={160} />
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