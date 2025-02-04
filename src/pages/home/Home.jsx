// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

/* eslint-disable react-refresh/only-export-components */
const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".mix-tape",
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(".strip", {
          x: self.progress * 300,
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <ParallaxImage src="/home/hero.jpg" alt="" />
          </div>

          <div className="hero-header">
            <h1>
              Villa <br/> Arnalaya
            </h1>
            <p><span style={{fontSize: "1.5em"}}>⛺︎</span> Bali, Indonesia</p>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
            <button>
              <Link to="/contact">Book Now</Link>
            </button>
          </div>

          <div className="news-article">
            <div className="news-article-title">
              <p className="primary LS-txt">
              Discover Arnalaya villa,<br/> a 1300 square meters
              </p>
            </div>
            <div className="news-article-info">
              <p>luxury estate in </p>
              <p>Canggu&apos;s</p>
              <p>chic coastline.</p>
            </div>
          </div>
        </section>

        <section className="site-intro">
          <div className="intro-col">
            <p className="primary">Hosting up to 15 guests</p>
            <p>With space for grand celebrations, this villa exceeds every expectation.</p>

            <img style={{ objectFit: "contain" }} src="/home/dena.png" alt="" />
          </div>
          <div className="intro-col">
            <p>The strength of the</p>
            <h2>
            Arnalaya <br/> villa
            </h2>
            <h3>resides in its versatility:</h3>
            <p>
            the five bedrooms can be fully furnished to the needs of the guests, with three suites allowing for a king or twin beds. These bedrooms, offering unique views on the estate and the ocean, are complete with ensuite bathrooms, satellite TV, DVD players, Bose sound system and iPod docks. The gym can be transformed into a bedroom thanks to unique architecture and design, with built-in beds and shower rooms for the larger guests groups.
            </p>
            <div className="intro-img">
              <div className="intro-img-wrapper">
                <ParallaxImage src="/home/interior.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="cover">
          <div className="cover-img">
            <ParallaxImage src="/home/uphill 1.png" alt="" />
          </div>

          <div className="cover-copy">
            <h3>Enter via a high gate</h3>
            <h2>into the villa&apos;s </h2>
            <p>
            Landscaped equatorial gardens stepping up to the ocean-front balé and pool. Climb the wonderfully angular staircase in the main pavilion to the lounge and dining rooms, and be lulled by the languid seascape. Two master bedrooms crown this building and have front row seats for the sunset show, with brilliant views to the horizon.
            </p>
            <br />
            <br />
            <p>
              A second pavilion, overlooking the tennis court and with more spectacular sea views from its upper floor, houses the entertainment room plus three identical guest bedrooms with canopied beds, sculptured terrazzo bathrooms and gardens with fish-filled lotus ponds. In a separate single-storey building is a sumptuous spa room and the gym, which can easily and ingeniously be transformed into an extra bedroom.
            </p>

            <div className="cover-cta">
              <button>
                <Link to="/contact">Book Now</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="mix-tape">
          <p className="primary">Facing the ocean and flanked</p>
          <p>by the shimmering swimming pool,</p>

          <h1>
            the pool lounge <br/> and dining balé
          </h1>

          <div className="tape">
            <div className="strip">
              <img src="/home/strip.png" alt="" />
            </div>
            <div className="tape-img">
              <img src="/home/tape.png" alt="" />
            </div>
          </div>

          <div className="tape-info">
            <p>
              Timber decking and gardens, the pool lounge and dining balé is furnished with a long and solid timber table for 14, hand-rendered rattan chairs and polished concrete banquette seating littered with comfy cushions.
            </p>
            <br />
            <br />
            <p>
              This breezy space has its own fully functional kitchen with a built-in barbecue, induction cooker and cocktail bar.
            </p>

            <div className="sticker">
              <img src="/stickers.png" alt="" />
            </div>
          </div>
        </section>

        <section className="latest-updates">
          <h1>Features</h1>
          <p className="lp-tagline">
            Arnalaya Villa is exceptionally well equipped for families. Facilities include: baby cot; high chair; bath; monitor; changing mats; cutlery and plates; car seat; DVDs; games.
          </p>

          <div className="updates-page-link">
            <Link to="/solutions">Explore</Link>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <ParallaxImage src="/home/interior.jpg" alt="" speed={0.1} />
              </div>
              <div className="article-title">
                <h3>
                  Indoor Living
                </h3>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <ParallaxImage src="/home/outdor.jpg" alt="" speed={0.1} />
              </div>
              <div className="article-title">
                <h3>
                  Outdoor Living
                </h3>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
