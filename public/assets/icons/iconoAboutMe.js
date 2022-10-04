import navbar from '../../../styles/navbar.module.css'

const IconoAboutMe = ({path}) => {
  return (
    <>
    <svg className={navbar.icons} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg>
    <span className={navbar.textIcons}>{path.slice(0,3) == "/en"? "About me": "Sobre mí"}</span>
    </>
  )
}

export default IconoAboutMe;