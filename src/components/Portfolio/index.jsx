import './styles.css';
import IMG1 from '../../assets/images/portfolio1.jpg';
export default function Portfolio() {
  return (
    <section id="portfokio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Guia do Desporto e Lazer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DarioCostaAlves" className="btn">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.oitomileseiscentos.guiadesportolazer"            
            target="_blank" className="btn btn-primary">Play store</a>          
          </div>          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Guia do Desporto e Lazer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DarioCostaAlves" className="btn">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.oitomileseiscentos.guiadesportolazer"            
            target="_blank" className="btn btn-primary">Play store</a>          
          </div>          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Guia do Desporto e Lazer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DarioCostaAlves" className="btn">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.oitomileseiscentos.guiadesportolazer"            
            target="_blank" className="btn btn-primary">Play store</a>          
          </div>          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Guia do Desporto e Lazer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DarioCostaAlves" className="btn">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.oitomileseiscentos.guiadesportolazer"            
            target="_blank" className="btn btn-primary">Play store</a>          
          </div>          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Guia do Desporto e Lazer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DarioCostaAlves" className="btn">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.oitomileseiscentos.guiadesportolazer"            
            target="_blank" className="btn btn-primary">Play store</a>          
          </div>          
        </article>
      </div>
    </section>
  )
}
