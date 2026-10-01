import React from "react";
import About from "../AboutUs/About";
import Reviews from "./Reviews";
import Features from "./Features";
import Footer from "./Footer";
import "./AboutReviews.css";

function AboutReviews() {
  return (
    <>
      {/* ABOUT */}
      <About />

      {/* REVIEWS + FEATURES — ONE CONTINUOUS BACKGROUND */}
      <section className="reviews-features-wrapper">
        <img
          src="/images/reviews-bg.png"
          alt=""
          className="reviews-features-bg"
        />

        <Reviews />
        <Features />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default AboutReviews;
