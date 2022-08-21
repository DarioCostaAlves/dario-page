import './styles.css';
import {BiHomeCircle, BiBookOpen} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';
import{GrContact} from 'react-icons/gr';
import{RiServiceLine} from 'react-icons/ri';
import{BsChatText} from 'react-icons/bs';

export default function Nav() {
  return (
    <nav>
      <a href="#"><BiHomeCircle/></a>
      <a href="#about"><FcAbout/></a>
      <a href="#experience"><BiBookOpen/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BsChatText/></a>
    </nav>
  )
}
