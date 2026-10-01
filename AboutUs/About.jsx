import "./About.css";

function About() {
  return (
    <section className="about">
      {/* =========================
          LEFT IMAGE
      ========================= */}

      <div className="about-image">
        <img src="/images/hero-cover.png" alt="Cafétcha café interior" />
      </div>

      {/* =========================
          RIGHT CONTENT
      ========================= */}

      <div className="about-content">
        <span className="about-label">About Us</span>

        <h2>More Than Just a Café</h2>

        <p>
          Cafétcha is more than just a café—it’s a place where good coffee meets
          creativity and connection. Inspired by the idea of bringing people and
          technology together, we create memorable drinks and experiences for
          everyone.
        </p>

        <a href="/our-story" className="about-button">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default About;
