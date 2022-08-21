import './styles.css';
import {BiHomeCircle, BiBookOpen} from 'react-icons/bi';
import{GrContact} from 'react-icons/gr';
import{RiServiceLine} from 'react-icons/ri';
import{BsChatText,BsInfoCircle} from 'react-icons/bs';

export default function Nav() {
  return (
    <nav>
      <a href="#"><BiHomeCircle/></a>
      <a href="#about"><BsInfoCircle/></a>
      <a href="#experience"><BiBookOpen/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BsChatText/></a>
    </nav>
  )
}
