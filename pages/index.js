import Link from "next/link";
import Layout from "../components/layout";
import home from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Layout>
        <div className={home.background}>
          <video muted autoPlay="true" loop="true" id={home.bgVideo}>
            <source src="/assets/hero_portfolio.mp4" type="video/mp4" />
          </video>
          <div className={home.content}>
            <h1>Gastón Aragón</h1>
            <p>Desarrollo web frontend</p>
            <div className={home.buttons}>
              <Link href="/skills">
                <a>Ver habilidades</a>
              </Link>
              <Link href="/projects">
                <a>Ver proyectos</a>
              </Link>
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}
