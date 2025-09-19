import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-heading">welcome to our shop</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore et
          iure doloremque quaerat. Qui minus, officia quibusdam illum ratione
          commodi.
        </p>
        <div className="buttons">
          <button type="button" className="btn">
            Order
          </button>
          <button type="button" className="btn">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
