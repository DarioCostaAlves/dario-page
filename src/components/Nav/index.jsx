import './styles.css';
import {BiHomeCircle, BiBookOpen} from 'react-icons/bi';
import{GrContact} from 'react-icons/gr';
import{RiServiceLine} from 'react-icons/ri';
import{BsChatText,BsInfoCircle} from 'react-icons/bs';
import{useState} from 'react';

export default function Nav() {
  const [activeNav, setActiveNAv] = useState('#');
  return (
    <nav>
      <a 
        href="#" 
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNAv('#')}>
        <BiHomeCircle/>
      </a>
      <a 
        href="#about" 
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNAv('#about')}>
        <BsInfoCircle/>
      </a>
      <a 
        href="#experience" 
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNAv('#experience')}>
        <BiBookOpen/>
      </a>
      <a 
        href="#services" 
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNAv('#services')}>
        <RiServiceLine/>
      </a>
      <a 
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNAv('#contact')}>
        <BsChatText/>
      </a>
    </nav>
  )
}
