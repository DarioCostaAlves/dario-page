import './styles.css';
import {RiCheckDoubleLine} from 'react-icons/ri';
export default function Services() {
  return (
    <section id="services">
      <h5>My offers</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </article>
        {/* End of Mobile Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
