import './styles.css';
import IMG1 from '../../assets/images/portfolio1.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Guia do Desporto e Lazer',
    github: 'https://github.com/',
    playStore: 'https://play.google.com/store/apps/details?id=com.oitomileseiscentos.guiadesportolazer',
    appStore: 'https://itunes.apple.com/',
    language: 'React Native',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Lagos Food Delivery',
    github: 'https://github.com/',
    playStore: 'https://play.google.com/',
    appStore: 'https://itunes.apple.com/',
    language: 'React Native',
  },  
];
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({ id, image, title, github, playStore, appStore, language }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={playStore} className="btn">Apple Store</a>
                <a href={appStore} target="_blank" className="btn btn-primary">Play store</a>          
              </div>          
            </article>
          )
        })
      } 
      </div>
    </section>
  )
}
