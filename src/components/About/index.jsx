import './styles.css';
import ME from '../../assets/images/me_smile.png';
import {RiAwardFill} from 'react-icons/ri';
import{FaUserFriends} from 'react-icons/fa';
import{MdOutlineWork} from 'react-icons/md';
export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="aboutCard__icon"/>
              <h5>Experience</h5>
              <small>1 year of experience</small>
            </article>
            <article className="about__card">
              <FaUserFriends className="aboutCard__icon"/>
              <h5>Clients</h5>
              <small>0 clients worldwide</small>
            </article>
            <article className="about__card">
              <MdOutlineWork className="aboutCard__icon"/>
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, neque deserunt! Officia tempora fuga dolorum illum alias nihil quae beatae architecto magnam, repellat quo eveniet reprehenderit voluptas, ex suscipit minus.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
