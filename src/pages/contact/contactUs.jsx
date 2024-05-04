import React from 'react'
import './contact.css';

function ContactUs() {
  return (
    <>
        <section id="page-header">
        <h2>
            #let's_talk
        </h2>
        <p classname="contact-p">
            LEAVE A MESSAGE. We Love to hear from you!
        </p>
    </section>

    <section id="contact">
        <div classname="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i classname="fas fa-map"></i>
                    <p>17E, 18th Cross Rd, Sector 3rd, HSR Layout, Bengaluru, Karnataka</p>
                </li>
                <li>
                    <i classname="far fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i classname="fas fa-phone-alt"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i classname="far fa-clock"></i>
                    <p>Monday to Saturday:9.00am to 7.00pm</p>
                </li>
            </div>
        </div>
        <div classname="map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.998662786958!2d77.64154817427921!3d12.907764213590964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15400539b081%3A0xd2ab89c277c8e8df!2s1stop!5e0!3m2!1sen!2sin!4v1659879093781!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.844500552668!2d77.1901374748188!3d28.544393288078965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6be7e6a75%3A0x8b149c3feb567bb1!2sIIT%20Delhi%20Main%20Rd%2C%20IIT%20Campus%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1714565640724!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="form-details">
        <form name="contact-us" method="post">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you..</h2>
            <input type="text" placeholder="Your Name" name="Name"/>
            <input type="email" placeholder="E-mail" name="E-mail" required/>
            <input type="text" placeholder="Subject" name="Subject"/>
            <textarea name="Message" id="" cols="30" rows="6" placeholder="Your Message" required/>
            <button id='submit-contact'>Submit</button>
        </form>
   </section>

    </>
  )
}

export default ContactUs;