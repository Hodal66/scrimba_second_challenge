import React from "react";
import Card from "./Card";
import HeroImage from "../assets/airbnbImage.png";
function Hero() {
  return (
    <section>
      <div className="home__image-container">
        <p>Muheto Hodal Collection</p>
        <img src={HeroImage} alt="Hello imaage" className="home--image" />
      </div>
      <div className="content__container">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <Card />
    </section>
  );
}

export default Hero;
