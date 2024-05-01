import React from 'react'
import './contact.css';

function Contact() {
  return (
    <>
        <section id="page-header" class="about-header">
        <h2>
            #let's_talk
        </h2>
        <p class="contact-p">
            LEAVE A MESSAGE. We Love to hear from you!
        </p>
    </section>

    <section id="contact">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="fas fa-map"></i>
                    <p>17E, 18th Cross Rd, Sector 3rd, HSR Layout, Bengaluru, Karnataka</p>
                </li>
                <li>
                    <i class="far fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i class="fas fa-phone-alt"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i class="far fa-clock"></i>
                    <p>Monday to Saturday:9.00am to 7.00pm</p>
                </li>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.998662786958!2d77.64154817427921!3d12.907764213590964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15400539b081%3A0xd2ab89c277c8e8df!2s1stop!5e0!3m2!1sen!2sin!4v1659879093781!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="form-details">
        <form name="contact-us" method="post">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you..</h2>
            <input type="text" placeholder="Your Name" name="Name"/>
            <input type="email" placeholder="E-mail" name="E-mail" required/>
            <input type="text" placeholder="Subject" name="Subject"/>
            <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message" required/>
            <button>Submit</button>
        </form>
        <div class="people">
            <div>
                <img src="people/1.png" alt=""/>
                <p><span>John Doe </span>Senior Marketing Manager <br/> Phone:+000 123 000 77 88 <br/> Email:contact@example.com</p>
            </div>
            <div>
                <img src="people/2.png" alt=""/>
                <p><span>William Smith </span>Senior Marketing Manager <br/> Phone:+000 123 000 77 88 <br/> Email:contact@example.com</p>
            </div>
           <div>
                <img src="people/3.png" alt=""/>
                <p><span>Emma Stone </span>Senior Marketing Manager <br/> Phone:+000 123 000 77 88 <br/> Email:contact@example.com</p>
            </div>
        </div>
   </section>

   

    <section id="newsletter">
    <div class="news-text">
        <h4>
            Sign Up for Newsletter
        </h4>
        <p>
            Get e-mail updates about latest products and <span>special offers</span>
        </p>
    </div>
    <div class="news-form">
        <input type="email" name="email" id="email" placeholder=" enter your email id"/>
        <button>Sign Up</button>
    </div>
    </section>
    </>
  )
}

export default Contact;