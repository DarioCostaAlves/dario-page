import './styles.css';
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>        
        <li><a href="#testimonials">Testimonials</a></li>        
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/dariocoding/"><BsLinkedin /></a>
        <a href="https://github.com/DarioCostaAlves"><BsGithub /></a>
        <a href="https://www.instagram.com/dariocostaalves//"><BsInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022 Dário Costa Alves. All rights reserved.</small>
      </div>
      
    </footer>
  )
}
