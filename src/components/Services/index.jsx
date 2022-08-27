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
              <p>IOS App Development.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Android App Development.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Cross-Platform App Development.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Responsive Development.</p>
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
              <p>Frontend.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Backend.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service__list-icon"/>
              <p>Peppa Pig.</p>
            </li>            
          </ul>
        </article>
        {/* End of Web Development */}        
      </div>
    </section>
  )
}
