import Link from "next/link";
import home from '../../styles/Home.module.css'
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';


export default function Home() {
  const boxRef = useRef();

  useEffect(() => {
      gsap.to(boxRef.current, { opacity: 1, y:-10 }); ;
  }, []);
  return (
    <>
      <div className={home.content} ref={boxRef}>
        <h1>Gastón Aragón</h1>
        <p>Frontend web developer</p>
        <div className={home.buttons}>
          <Link href="/projects">
            <a>View projects</a>
          </Link>
          <Link href="/skills">
            <a>View skills</a>
          </Link>
        </div>
      </div>
    </>
  )
}
