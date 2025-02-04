import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Updates.css";

import { ReactLenis, useLenis } from "lenis/react";

const Updates = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page updates">
        <section className="updates-hero">
          <h1>Gallery</h1>
        </section>

        <section className="filters" style={{ display: "none" }}>
          <div className="filter active">
            <p>All</p>
          </div>
          <div className="filter">
            <p>Resources</p>
          </div>
          <div className="filter">
            <p>Standards</p>
          </div>
          <div className="filter">
            <p>News</p>
          </div>
        </section>

        <section className="articles">
          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/home/1.jpg" alt="AI Voices Battle" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>View beachfront property</h3>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <img src="/home/2.jpg" alt="AI Ethics Discussion" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>The room at the beach</h3>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/home/3.jpg" alt="Artists' Rights" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Kitchen that you can use</h3>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <img src="/home/4.jpg" alt="AI and Music" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Dining Room with views</h3>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/home/5.jpg" alt="Policy Reforms" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Pool and Garden party area</h3>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <img src="/home/outdor.jpg" alt="AI and Creative Rights" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Relaxing area with views</h3>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/home/outdor2.jpg" alt="Future of AI" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; View</p>
                </div>
              </div>
              <div className="article-title">
                <h3>The green area magnificient views</h3>
              </div>
            </div>

            <div className="article"></div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Seminyak with its fine dining, <br/>funky clubs
              </h2>
              <p className="primary">
                and chic shopping is 20 minutes south.
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Support@balancedpitch.com</p>
              <p>Since 2024</p>
            </div>
            <div className="banner-info">
              <p>
                Head north and visit the important sea temple of Tanah Lot. The famous Echo Beach, less than a ten-minute walk along the ocean&apos;s edge, has a great seafood barbecue and sunset surfing.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/home/dinner.jpg"
                alt="Driving Innovation with Integrity"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Updates);
