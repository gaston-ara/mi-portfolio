import Link from "next/link";
import home from '../styles/Home.module.css'
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';


export default function Home() {
  const boxRef = useRef();

  useEffect(() => {
      gsap.to(boxRef.current, { opacity: 1 }); ;
  }, []);
  return (
    <>
      <div className={home.content} ref={boxRef}>
        <h1>Gastón Aragón</h1>
        <p>Desarrollo web frontend</p>
        <div className={home.buttons}>
          <Link href="/skills">
            <a>Ver proyectos</a>
          </Link>
          <Link href="/projects">
            <a>Ver habilidades</a>
          </Link>
        </div>
      </div>
    </>
  )
}
