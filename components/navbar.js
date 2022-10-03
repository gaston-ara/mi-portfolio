import Link from 'next/link'
import navbar from '../styles/navbar.module.css'
import {useRouter} from 'next/router'
import IconoHome from '../public/assets/icons/iconoHome'
import IconoAboutMe from '../public/assets/icons/iconoAboutMe'
import IconoProyectos from '../public/assets/icons/iconoProyectos'
import IconoHabilidades from '../public/assets/icons/iconoHabilidades'
import IconoContacto from '../public/assets/icons/iconoContacto'
import {gsap} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
   const router = useRouter();
   const path = router.asPath;

   const navRef = useRef();

  useEffect(() => {
      gsap.to(navRef.current, { opacity: 1, delay: 0.3 }); ;
  }, []);
    return (
        <nav className={navbar.container} ref={navRef}>
            <div className={navbar.items_container}>
                <Link href="/">
                <a className={navbar.logo}>GA</a>
                </Link>
                <div className={navbar.nav_items}>
                    <Link href="/">
                        <a className={path == "/" ? navbar.navlink : undefined}><IconoHome/></a>
                    </Link>
                    <Link href="/aboutme">
                        <a className={path == "/aboutme" ? navbar.navlink : undefined}><IconoAboutMe/></a>
                    </Link>
                    <Link href="/projects">
                        <a className={path == "/projects" ? navbar.navlink : undefined}><IconoProyectos/></a>
                    </Link>
                    <Link href="/skills">
                        <a className={path == "/skills" ? navbar.navlink : undefined}><IconoHabilidades/></a>
                    </Link>
                    <Link href="/contact">
                        <a className={path == "/contact" ? navbar.navlink : undefined}><IconoContacto/></a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar