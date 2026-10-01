import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AuthModal from "../Customer/AuthModal";
import LoginModal from "./LoginModal";
import "./Highlights.css";

// Highlights 1-3 open the menu page. Highlight 4 has no link yet — clicking
// it opens the login / sign up modal instead (set its link later when ready).
const highlights = [
  {
    id: 1,
    image: "/images/highlight-1.png",
    alt: "Cafetcha Highlight 1",
    link: "/menu",
  },
  {
    id: 2,
    image: "/images/highlight-2.png",
    alt: "Cafetcha Highlight 2",
    link: "/menu",
  },
  {
    id: 3,
    image: "/images/highlight-3.png",
    alt: "Cafetcha Highlight 3",
    link: "/menu",
  },
  {
    id: 4,
    image: "/images/highlight-4.png",
    alt: "Cafetcha Highlight 4",
    link: null,
  },

  /*
    ADD MORE HIGHLIGHTS HERE

    Example:

    {
      id: 5,
      image: "/images/highlight-5.png",
      alt: "Cafetcha Highlight 5",
      link: "#menu",
    },
  */
];

function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  /* =========================
     NEXT SLIDE
  ========================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return (prev + 1) % highlights.length;
    });
  };

  /* =========================
     PREVIOUS SLIDE
  ========================= */

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      return (prev - 1 + highlights.length) % highlights.length;
    });
  };

  /* =========================
     SPECIFIC SLIDE
  ========================= */

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  /* =========================
     AUTO SLIDE
     EVERY 6 SECONDS
  ========================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % highlights.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="highlights" id="highlights">
      {/* =========================
          BACKGROUND IMAGE
      ========================= */}

      <img src="/images/highlight-bg.png" alt="" className="highlights-bg" />

      {/* =========================
          CONTENT
      ========================= */}

      <div className="highlights-content">
        {/* =========================
            TITLE
        ========================= */}

        <div className="highlights-title">
          <div className="title-decoration">
            <span className="decoration-line"></span>

            <span className="decoration-star">✦</span>

            <span className="decoration-line"></span>
          </div>

          <h2>CAFÉTCHA HIGHLIGHTS</h2>

          <div className="title-decoration bottom-decoration">
            <span className="decoration-star">✦</span>

            <span className="decoration-line"></span>

            <span className="decoration-star">✦</span>
          </div>
        </div>

        {/* =========================
            SLIDER
        ========================= */}

        <div className="highlight-slider">
          {/* PREVIOUS */}

          <button
            type="button"
            className="highlight-arrow highlight-arrow-left"
            onClick={previousSlide}
            aria-label="Previous highlight"
          >
            <ChevronLeft size={25} strokeWidth={1.8} />
          </button>

          {/* =========================
              HIGHLIGHT IMAGE
          ========================= */}

          {highlights[currentIndex].link ? (
            <a
              href={highlights[currentIndex].link}
              className="highlight-card"
              aria-label={`Open ${highlights[currentIndex].alt}`}
            >
              {highlights.map((highlight, index) => (
                <img
                  key={highlight.id}
                  src={highlight.image}
                  alt={highlight.alt}
                  className={`highlight-slide-image ${
                    index === currentIndex ? "active" : ""
                  }`}
                />
              ))}
            </a>
          ) : (
            <button
              type="button"
              className="highlight-card"
              onClick={() => setShowLoginModal(true)}
              aria-label={highlights[currentIndex].alt}
            >
              {highlights.map((highlight, index) => (
                <img
                  key={highlight.id}
                  src={highlight.image}
                  alt={highlight.alt}
                  className={`highlight-slide-image ${
                    index === currentIndex ? "active" : ""
                  }`}
                />
              ))}
            </button>
          )}

          {/* NEXT */}

          <button
            type="button"
            className="highlight-arrow highlight-arrow-right"
            onClick={nextSlide}
            aria-label="Next highlight"
          >
            <ChevronRight size={25} strokeWidth={1.8} />
          </button>
        </div>

        {/* =========================
            DOTS
        ========================= */}

        <div className="highlight-dots">
          {highlights.map((highlight, index) => (
            <button
              key={highlight.id}
              type="button"
              className={`highlight-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Show highlight ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={() => {
            setShowLoginModal(false);
            setAuthOpen(true);
          }}
        />
      )}
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </section>
  );
}

export default Highlights;
