import Link from 'next/link'
import navbar from '../styles/navbar.module.css'
import {useRouter} from 'next/router'
const Navbar = () => {
   const router = useRouter();
   const path = router.asPath;
    return (
        <nav className={navbar.container}>
            <div className={navbar.items_container}>
                <Link href="/">
                <a className={navbar.logo}>Gastón Aragón</a>
                </Link>
                <div className={navbar.nav_items}>
                    <Link href="/">
                        <a className={path == "/" && navbar.navlink}>Inicio</a>
                    </Link>
                    <Link href="/aboutme">
                        <a className={path == "/aboutme" && navbar.navlink}>Sobre mí</a>
                    </Link>
                    <Link href="/projects">
                        <a className={path == "/projects" && navbar.navlink}>Proyectos</a>
                    </Link>
                    <Link href="/skills">
                        <a className={path == "/skills" && navbar.navlink}>Habilidades</a>
                    </Link>
                    <Link href="/contact">
                        <a className={path == "/contact" && navbar.navlink}>Contacto</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar