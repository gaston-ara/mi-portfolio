import Link from "next/link";
import home from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <div className={home.content}>
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
