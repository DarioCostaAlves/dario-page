import {BsLinkedin, BsGithub} from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
export default function HeaderSocials() {
  return (
    <div className="header__socials">        
        <a href="https://github.com/DarioCostaAlves" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/dariocoding/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/dariocostaalves/" target="_blank"><RiInstagramFill/></a>
    </div>
)   
}
