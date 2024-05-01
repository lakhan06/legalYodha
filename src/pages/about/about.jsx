import React from 'react';
import './about.css';
import a6 from './aboutImages/a6.jpg'
import f1 from './features/f1.png'
import f2 from './features/f2.png'
import f3 from './features/f3.png'
import f4 from './features/f4.png'
import f5 from './features/f5.png'
import f6 from './features/f6.png'
import Footer from '../../components/footer/Footer';

function About() {
  return (
    <>
    <section id="page-header" class="about-header">
        <h2>
            #KnowUs
        </h2>
        <p>Lorem ipsum dolor sit amet,consectetur</p>
    </section>
    
    <section id="about-head">
        <img src={a6} alt=""/>
        <div>
            <h2>Who We Are?</h2>
            <p>
                Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <abbr title="">
                Create stunning images with as much or as little control as
                you like thanks toachoice of Basic and Creative modes.
            </abbr>
            <br/><br/>
            <marquee loop="-1" scrollamount="5" width="100%" bgcolor="#ccc">
                Create stunning images with as much or as little control as you like thanks toa
                choice of Basic and Creative modes.
            </marquee>
        </div>
    </section>

    {/* <section id="about-app">
        <h1> Download Our <a href="#"> App </a></h1>
        <div class="video">
            <video src={vid} autoplay muted loop></video>
        </div>
    </section> */}
 
    <section id="features" class="f-about">
    <div class="fe-box">
        <img src={f1}/>
        <h6>Free Consultance</h6>
    </div>
    <div class="fe-box">
        <img src={f2}/>
        <h6>Online Service</h6>
    </div>
    <div class="fe-box">
        <img src={f3}/>
        <h6>Save Money</h6>
    </div>
    <div class="fe-box">
        <img src={f4}/>
        <h6>Hassle Free</h6>
    </div>
    <div class="fe-box">
        <img src={f5}/>
        <h6>Finance Sorted</h6>
    </div>
    <div class="fe-box">
        <img src={f6}/>
        <h6>24/7 Support</h6>
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
    <Footer/>
    </>
  )
}

export default About