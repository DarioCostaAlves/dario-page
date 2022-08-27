import './styles.css';
import {useRef} from 'react';
import{MdOutlineMailOutline} from 'react-icons/md';
import{BsLinkedin, BsWhatsapp} from 'react-icons/bs';
//EmailJS
import emailjs from 'emailjs-com';
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ghpux1a', 'template_w2hdtu6', form.current, '7-g5sFc4iab-5u2YD')
          
    e.target.reset();
  };

  return (
    <section id="contact">      
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>dario.c.alves22@gmail.com</h5>
            <a href="mailto:dario.c.alves22@gmail.com" target="_blank">Send a message</a>            
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>dariocoding</h5>
            <a href="https://www.linkedin.com/in/dariocoding/" target="_blank">Send a message</a>            
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+351966514109</h5>
            <a href="https://wa.me/+351966514109?text=Hi Dário" target="_blank">Send a message</a>            
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Message' rows="8" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}
