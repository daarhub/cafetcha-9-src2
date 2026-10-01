import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Hero Cover */}
      <img
        src="/images/hero-cover.png"
        alt="Cafétcha Cafe"
        className="hero-image"
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <p className="hero-eyebrow">
          YOUR COFFEE. YOUR WAY.
        </p>

        <h1>
          Cafétcha
        </h1>

        <p className="hero-description">
          Craft your perfect cup, your way. Explore our menu,
          customize your drink, and order with ease.
        </p>

        <a
          href="/menu"
          className="hero-button"
        >
          Order Now!
        </a>

      </div>

    </section>
  );
}

export default Hero;
