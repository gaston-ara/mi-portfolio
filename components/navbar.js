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
                <Link href={path.slice(0,3) == "/en"? "/en" : "/"}>
                <a className={navbar.logo}><img height="32px" src="/assets/GA.png" alt="logo" /></a>
                </Link>
                <div className={navbar.nav_items}>
                    <Link href={path.slice(0,3) == "/en"? "/en" : "/"}>
                        <a className={(path == "/" || path == "/en") ? navbar.navlink : undefined}><IconoHome path={path}/></a>
                    </Link>
                    <Link href={path.slice(0,3) == "/en"? "/en/aboutme" : "/aboutme"}>
                        <a className={path.includes("/aboutme") ? navbar.navlink : undefined}><IconoAboutMe path={path}/></a>
                    </Link>
                    <Link href={path.slice(0,3) == "/en"? "/en/projects" : "/projects"}>
                        <a className={path.includes("/projects") ? navbar.navlink : undefined}><IconoProyectos path={path}/></a>
                    </Link>
                    <Link href={path.slice(0,3) == "/en"? "/en/skills" : "/skills"}>
                        <a className={path.includes("/skills") ? navbar.navlink : undefined}><IconoHabilidades path={path}/></a>
                    </Link>
                    <Link href={path.slice(0,3) == "/en"? "/en/contact" : "/contact"}>
                        <a className={path.includes("/contact") ? navbar.navlink : undefined}><IconoContacto path={path}/></a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar