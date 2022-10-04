import aboutme from '../../styles/aboutme.module.css'
import Image from 'next/image'
import profilePic from '../../public/assets/toon.webp'
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
            <p>I offer solutions based on web design and programming. I train myself in order to carry out work according to the needs and possibilities of each project. My purpose is to offer a useful, honest and reliable service, prioritizing the user and the objectives of the work to be developed.
            </p>
          </div>
        </div>

      </>
  )
}

export default Aboutme