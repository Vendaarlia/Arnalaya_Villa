// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "/src/components/Transition/Transition";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Contact.css";

import { ReactLenis, useLenis } from "lenis/react";

const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page contact">
        <section className="contact-hero">
          <div className="contact-hero-img">
            <ParallaxImage src="/home/uphill 1.png" alt="" />
          </div>

          <div className="contact-hero-header">
            <h1>Get in touch</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>

          <div className="contact-form">
            <div className="form-col">
              <div className="form-header">
                <p className="primary">
                  The epitome of tropical living Arnalaya Beach House looks down over beautiful
                </p>
                <p>Visit us today!</p>

                <button>
                  <Link to="/contact">Book Now</Link>
                </button>
              </div>
              <div className="form-details">
                <div className="join-our-team">
                  <p className="primary">GUEST EXPERIENCE</p>
                  <p>
                  The service is very nice, and the staff are polite, helpful, and friendly. The rooms are big and comfy. My family and I had a very lovely time, and the pool and garden view are amazing. Our wedding was perfect, and it is definitely my dream wedding at Arnalaya.
                  <br/><br/>Amanda W, Hong Kong
                  <br/>21-Nov-2024 to 24-Nov-2024
                  </p>
                </div>
                <div className="divider"></div>
              </div>
            </div>
            <div className="form-col">
              <div className="form">
                <div className="form-row">
                  <div className="form-item">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-item">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Email Address" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Date of visit" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Where are you located?" />
                </div>
                <div className="form-item">
                  <textarea
                    name=""
                    id=""
                    rows={8}
                    placeholder="Your apointment?"
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <p className="primary">
                    <Link to="/">Submit</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
              Arnalaya <br/> Beach House
              </h2>
              <p className="primary">
              Is a masterpiece of contemporary beachside design
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">visit wander full</p>
              <p>indonesia</p>
            </div>
            <div className="banner-info">
              <p>
                set in tropical gardens with a private tennis court, gym and spa that entwine to create the ultimate destination for surfside living.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/home/sunset.jpg"
                alt="Innovating the Future of Music"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Contact);
