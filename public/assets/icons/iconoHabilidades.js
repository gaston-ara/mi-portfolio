import navbar from '../../../styles/navbar.module.css'

const IconoHabilidades = ({path}) => {
  return (
    <>
    <svg className={navbar.icons} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z"/></svg>
    <span className={navbar.textIcons}>{path.slice(0,3) == "/en"? "Skills": "Habilidades"}</span>
    </>
    )
}

export default IconoHabilidades