import './styles.css';
import AVTR1 from '../../assets/images/me_smile.png';
import AVTR2 from '../../assets/images/peppa.png';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    img: AVTR1,
    name: 'Dário Costa Alves',
    review: 'Yes, I can say that I am very satisfied with my service. Why Am I reviewed myself? I dont know.'
  },
  {
    img: AVTR2,
    name: 'Peppa Pig',
    review: 'He is very bad. 0 stars.'
  },
]
export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Testimonials</h5>
      <h2>What people say</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Navigation, Pagination]}
       spaceBetween={80}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
         
       >
        {
          data.map(({ img, name, review }, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={img} alt="First person" />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>    
            )
          })
        } 
      </Swiper>
    </section>
  )
}
