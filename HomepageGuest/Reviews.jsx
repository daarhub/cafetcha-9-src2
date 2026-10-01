import React, { useState } from "react";
import { Star, UserRound, Quote } from "lucide-react";
import AuthModal from "../Customer/AuthModal";
import LoginModal from "./LoginModal";
import ReviewsModal from "../Admin/Reviews/ReviewsModal";
import WriteReviewModal from "../Admin/Reviews/WriteReviewModal";
import { getTargetReviews, useReviews } from "../Admin/Reviews/ReviewsStore";
import { useCustomerStore } from "../Customer/customerStore";
import "./Reviews.css";

function Reviews() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [showAll, setShowAll] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("reviewReplies") === "true" && params.get("reviewTarget") === "store";
  });
  const [writeOpen, setWriteOpen] = useState(false);
  const { customer } = useCustomerStore();

  // Live store reviews — newest first, limited to 3 for the homepage cards.
  useReviews();
  const storeReviews = getTargetReviews(null);
  const displayReviews = storeReviews.slice(-3).reverse();

  const openWrite = () => {
    if (customer) {
      setWriteOpen(true);
    } else {
      setShowLoginModal(true);
    }
  };

  // The guest gate's Login / Sign Up button opens the full auth modal; only
  // after a real login do we continue to the Write a Review modal.
  const handleGateLogin = () => {
    setShowLoginModal(false);
    setAuthOpen(true);
  };

  return (
    <section className="reviews" id="reviews">
      {/* decorative beans */}
      <img
        src="/images/coffee-bean1.png"
        alt=""
        className="reviews-beans reviews-beans-left"
      />
      <img
        src="/images/coffee-bean2.png"
        alt=""
        className="reviews-beans reviews-beans-right"
      />

      <div className="reviews-content">
        <div className="reviews-heading">
          <span className="reviews-eyebrow">CAFÉTCHA COMMUNITY</span>

          <div className="reviews-title-row">
            <span className="heading-line"></span>

            <h2>What Our Customers Say</h2>

            <span className="heading-line"></span>
          </div>

          <p>Your experience matters to us.</p>
        </div>

        {getTargetReviews(null).length === 0 ? (
          <p className="reviews-empty">
            No reviews yet — be the first to share your experience!
          </p>
        ) : (
          <div className="reviews-list">
            {displayReviews.map((review) => (
              <article className="review-card" key={review.id}>
                <div className="review-card-accent"></div>

                <Quote className="review-quote" size={25} strokeWidth={1.5} />

                <div className="review-user">
                  <div className="review-avatar">
                    <UserRound size={25} strokeWidth={1.8} />
                  </div>

                  <div className="review-user-info">
                    <span className="review-name">{review.customerName}</span>

                    <span className="review-label">Verified Customer</span>
                  </div>
                </div>

                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="review-text">“{review.text}”</p>
              </article>
            ))}
          </div>
        )}

        <div className="review-buttons">
          <button
            className="review-button review-button-primary"
            onClick={() => setShowAll(true)}
          >
            See All Reviews
            <span>→</span>
          </button>

          <button
            className="review-button review-button-secondary"
            onClick={openWrite}
          >
            Write a Review
          </button>
        </div>
      </div>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleGateLogin}
        />
      )}
      {authOpen && (
        <AuthModal
          onClose={() => setAuthOpen(false)}
          onAuthenticated={() => {
            setAuthOpen(false);
            setWriteOpen(true);
          }}
        />
      )}
      {showAll && <ReviewsModal onClose={() => setShowAll(false)} />}
      {writeOpen && (
        <WriteReviewModal
          onClose={() => setWriteOpen(false)}
          onRequireLogin={() => {
            setWriteOpen(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </section>
  );
}

export default Reviews;
