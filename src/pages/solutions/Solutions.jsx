// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "../../components/Footer/Footer";
import Transition from "/src/components/Transition/Transition";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Solutions.css";

import { ReactLenis, useLenis } from "lenis/react";

const Solutions = () => {
// eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page solutions">
        <section className="solutions-hero about-hero">
          <div className="solutions-hero-img">
            <ParallaxImage src="/home/outdor3.jpg" alt="" />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>Features</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>
          <div className="solutions-hero-info">
            <p className="primary">Live the dream</p>
            <p className="primary">at this marvelous</p>
            <p className="primary">beachfront</p>
            <p className="primary">in Bali&apos;s</p>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                unspoiled Nelayan <br />
                Beach,
              </h2>
              <p className="primary">
              a strip of fisherman’s huts,
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Arnalaya Beach House</p>
              <p>looks down over beautiful, unspoiled Nelayan Beach,</p>
            </div>
            <div className="banner-info">
              <p>
                colourful fishing boats and a sacred temple, at the end of one of Canggu’s most exclusive roads. Beach bums will adore the location, which offers everything from beers on the sands served from a coolbox, to groovy sunset sessions at the uber chilled Old’s Mans beach bar.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/home/outdor4.jpg"
                alt="Empowering Creators Through Innovation"
              />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-header">
            <div className="features-col">
              <img
                src="/solutions/text-bg.png"
                alt="Machine Learning Training Data"
              />
              <h3>
                Quick <br/> facts
              </h3>
            </div>
            <div className="features-col">
              <img src="/solutions/text-bg.png" alt="Artist Attribution" />
              <h3>
                Arnalaya <br/> Beach House
              </h3>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>01.</p>
              <p>Living areas</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Air-conditioned lounge and formal dining for 14; entertainment room; pool lounge and dining bale also with table for 14.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>02.</p>
              <p>Staff</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Villa manager; private chef; housekeeping; security.  Additional staff such as babysitters, personal trainers and masseuses on request (additional charge).
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>03.</p>
              <p>Entertainment</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                60-inch TV screen in entertainment room; Satellite TVs in bedrooms; DVD player; surround-sound system; CD player; iPod dock.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>04.</p>
              <p>Spa</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Spa room with two massage tables. In-villa treatments can be selected from a comprehensive spa menu and carried out by professional therapists including sport massage (extra cost applies).
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>05.</p>
              <p>Weddings & events</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              Arnalaya Beach House makes a spectacular event venue and celebrations for up to 150 people can be arranged with prior notice. Please click <a href="http://https://cdn.elitehavens.com/docs/eventguidelines/indonesia/Arnalaya-Beach-House-Event-Guidelines.pdf?_gl=1*1wdnn0c*_gcl_au*MTQwMzQ2NDA2MS4xNzM2OTM0Nzcy&_ga=2.45157412.186731501.1738575641-636535734.1736934772#_gl=1*1wdnn0c*_gcl_au*MTQwMzQ2NDA2MS4xNzM2OTM0Nzcy" style={{color: "black", textDecoration: "underline"}} target="_blank" rel="noopener noreferrer">here</a> to view event guidelines
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-callout">
          <div className="callout-bg">
            <ParallaxImage
              src="/home/1.jpg"
              alt="Ethical AI Callout Background"
            />
          </div>

          <div className="callout-copy">
            <h2>
              Minimalist vertical <br/> lines accent <br/> contemporary sanctuary.
            </h2>
          </div>
        </section>

        <section className="rights">
          <h1>Aesthetically</h1>
          <h3>gratifying for the design addict</h3>

          <p className="tagline">with romantically queen beds that can be configured as Hollywood twin bed style.</p>
          <p>
              while being superbly luxurious, Arnalaya Beach House&apos;s, and point blank ocean views from the picture windows of the third-floor master ensuites. Families and groups with sporting enthusiasts will adore the private tennis court, 20-metre saltwater pool, gym, spa room and yoga.
          </p>
        </section>

        <section className="rights-list">
          <div className="right">
            <div className="right-index">
              <p>(01)</p>
            </div>
            <div className="right-title">
              <h3>Ocean Suites</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>2 pairs of mirror-image bedroom with canopied four-poster bed: can be configured to twins</p>
              </div>
              <div className="right-desc-line">
                <p>Sumptuous ensuite bathroom with a free-standing bathtub in front of a bay window overlooking the sea, rain shower, sculptured terrazzo walls</p>
              </div>
              <div className="right-desc-line">
                <p>Bose ceiling speakers and TV in a closet, Desk and lounge area</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(02)</p>
            </div>
            <div className="right-title">
              <h3>Courtyard Suite</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Canopied four-poster bed can be configured as twins</p>
              </div>
              <div className="right-desc-line">
                <p>Open bathroom with stand alone bathtub and separate shower</p>
              </div>
              <div className="right-desc-line">
                <p>Additional pull-down single bed, Minimalist design cupboards that conceal television and utilities</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(03)</p>
            </div>
            <div className="right-title">
              <h3>Gym/Sixth Bedroom</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>The gym is easily converted to a sixth bedroom for larger guest groups</p>
              </div>
              <div className="right-desc-line">
                <p>Two cleverly concealed single beds pull down from built-in wall units</p>
              </div>
              <div className="right-desc-line">
                <p>Two additional portable single beds available for this room or other rooms, Ensuite shower room</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Always <br/> seeking <br/> out fresh
              </h2>
              <p className="primary">
                and – wherever possible – organic produce
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary"> The Dining</p>
              <p>The chef has devised a menu</p>
            </div>
            <div className="banner-info">
              <p>
                The Chef is inspired by the fruit and vegetable markets of Bali and of produce from the sea. A barbecue at the pool balé is not to be missed, with juicy steaks and fresh lobster for the carnivores and herb-marinated vegetable skewers, chargrilled sweet corn with chili lime butter and quinoa tabouleh for the lucky vegetarians of the group.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/home/4.jpg"
                alt="Balanced Pitch Innovation"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Solutions);
