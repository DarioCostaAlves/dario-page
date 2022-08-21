import './styles.css';
import CTA from './CTA';
import ME from '../../assets/images/me.png';
import HeaderSocials from './HeaderSocials';
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey, I'm</h5>
        <h1>Dário Alves</h1>
        <h5 className="text-light">Mobile Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">          
          <img src={ME} alt="Dário Alves" />          
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}
