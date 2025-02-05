// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "/src/components/Transition/Transition";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./About.css";

import { ReactLenis, useLenis } from "lenis/react";

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page about">
        <section className="solutions-hero about-hero">
          <div className="solutions-hero-img">
            <ParallaxImage src="/home/front.jpg" alt="" />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>Our Story</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>
          <div className="about-hero-info">
            <p>Minimalist vertical lines accent this uber cool and contemporary sanctuary</p>
          </div>
        </section>
        <section className="about-us">
          <div className="about-us-col">
            <div className="sign-up-card">
              <div className="sign-up-img">
                <ParallaxImage src="/home/wedding.jpg" alt="" />
              </div>
              <div className="sign-up-card-header">
                <h3>
                Hidden jewel in Canggu for a dream wedding or party
                </h3>
                <p>What a unique position Arnalaya Beach House holds on the beachfront at Canggu.   Indulge in the sunset-facing terraces and romantic ocean-front balé, or make a pathway of candles through the lawns littered with flower petals.</p>
              </div>
              <div className="sign-up-cta">
              <button>
                <Link to="/contact">Let&apos;s Party</Link>
              </button>
            </div>
            </div>
          </div>
          <div className="about-us-col">
            <h3>
              Arnalaya Beach House looks down over beautiful, unspoiled Nelayan Beach, a strip of fisherman’s huts,
            </h3>
            <p>
             Colourful fishing boats and a sacred temple, at the end of one of Canggu’s most exclusive roads. Beach bums will adore the location, which offers everything from beers on the sands served from a coolbox, to groovy sunset sessions at the uber chilled Old’s Mans beach bar. The famous Echo Beach – less than a ten-minute walk along the ocean’s edge – has a great seafood barbecue and sunset surfing.  Seminyak with its fine dining, funky clubs and chic shopping is 20 minutes south. Head north and visit the important sea temple of Tanah Lot.
            </p>

            <div className="about-us-cta">
              <button>
                <Link to="/contact">Book Now</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="team-bg">
            <ParallaxImage src="/home/uphill 1.png" alt="" />
          </div>
          <div className="team-header">
            <h3>Things to Do </h3>
            <h1>On</h1>
            <div className="join-team-card">
              <h3>Arnalaya Beach House</h3>
              <p>
              Arnalaya Beach House is loaded with information about the many wonderful things to do in Canggu and further away. It has it’s own Black Book revealing the best restaurants and cafes and the manager has the inside drum on what’s not to be missed. Chat with the staff as many live locally and can share their insight. You may find yourself invited to a unique and unforgettable Balinese Hindu ceremony. Meanwhile, here are a few suggestions to get your vacation started. The villa manager will happily arrange transport and specialist tours too.
              </p>

              <div className="join-team-cta">
                <button>
                  <Link to="/contact">Book Now</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="team-list">
            <div className="team-list-row">
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/home/Calm_reflection.jpg"
                    alt="Team member 1"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Calm reflection</h3>
                  <p>It’s the feeling of a calming sunday, every day of the week. Your favourite record playing on vinyl. Home-cooked meals with your closest friends, whom you call family. It’s fresh sheets after a long day. Gentle sunlight.</p>
                </div>
              </div>
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/home/surf.jpg"
                    alt="Team member 2"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Learn to surf</h3>
                  <p>Canggu is a thriving area of Bali with a vibrant surfing community having now replaced Kuta/Seminyak as the most popular holiday/party destination. While there are various high performance and mellow waves in the Canggu area, it does not compare with the Uluwatu area for variety of surf breaks, and can not hold a big swell like the reefs on the Bukit.</p>
                </div>
              </div>
            </div>
            <div className="team-list-row">
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/home/swim.jpg"
                    alt="Team member 3"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Outdoor activities</h3>
                  <p>Enjoy the excitement of Sunday sessions at Old Man&apos;s DJs, play their best music, creating a lively and energetic atmosphere. Perfect for relaxing while enjoying a refreshing drink and beautiful beach views. Not only that, this place is also very suitable for families, with tennis facilities and various other games that will keep the kids happy.</p>
                </div>
              </div>
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/home/rafting.jpg"
                    alt="Team member 4"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>White water rafting</h3>
                  <p>Get wet and wild with the pioneers of Bali’s adventure industry, and enjoy a thrilling and scenic journey along. Featuring Bali’s longest white water rafting trip and exclusively providing the only premium experience available on the island from start to finish; including the best facilities, equipment, safety, food and service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-marquee">
          <div className="marquee_container">
            <div className="marquee">
              <h1>Arnalaya Beach House</h1>
              <h1>Minimalist vertical</h1>
              <h1>lines accent</h1>
              <h1>this uber cool</h1>
              <h1>and contemporary</h1>
              <h1>sanctuary</h1>
              <h1>Aesthetically</h1>
              <h1>gratifying</h1>
              <h1>for the design addict</h1>
            </div>
            <div className="marquee">
            <h1>Arnalaya Beach House</h1>
              <h1>Minimalist vertical</h1>
              <h1>lines accent</h1>
              <h1>this uber cool</h1>
              <h1>and contemporary</h1>
              <h1>sanctuary</h1>
              <h1>Aesthetically</h1>
              <h1>gratifying</h1>
              <h1>for the design addict</h1>
            </div>
          </div>
        </section>


        {/* <section className="services">
          <div className="service-row">
            <div className="service-title">
              <h3>01.</h3>
              <h3>Respecting Creative Ownership</h3>
            </div>
            <div className="service-desc">
              <p>AI Training Starts With Permission</p>
              <p>
                We prioritize clear consent and transparency when it comes to
                training AI models. Our mission is to honor the creative legacy
                and rights of human artists as technology evolves.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>02.</h3>
              <h3>Driving Innovation Through Unity</h3>
            </div>
            <div className="service-desc">
              <p>Action Beyond Legislation</p>
              <p>
                While advocating for supportive policies, we focus on collective
                industry efforts to develop ethical frameworks and
                self-regulation, ensuring responsible AI innovation.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>03.</h3>
              <h3>Establishing AI Rights Standards</h3>
            </div>
            <div className="service-desc">
              <p>Metadata Is the Foundation of Fair AI</p>
              <p>
                Setting global standards for AI rights ensures proper
                attributions and respect for training data. We collaborate with
                industry leaders to develop open frameworks that balance
                innovation with ethical responsibility.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>04.</h3>
              <h3>Empowering Ethical AI Awareness</h3>
            </div>
            <div className="service-desc">
              <p>Knowledge Transforms the Industry</p>
              <p>
                We are dedicated to educating artists, technologists, and the
                public on the intersection of AI and music, equipping everyone
                with the tools to advocate for fair practices.
              </p>
            </div>
          </div>
        </section> */}

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

export default Transition(About);
