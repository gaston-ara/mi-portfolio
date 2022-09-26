import aboutme from '../styles/aboutme.module.css'
import Image from 'next/image'
import profilePic from '../public/assets/toon.jpg'

const Aboutme = () => {
  return (
      <>
        <div className={aboutme.content}>
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