import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import { Coffee, Gift, ShieldCheck, ShoppingCart, Stamp, Trophy } from "lucide-react";
import "./LoyaltyPage.css";

function LoyaltyPage() {
  return (
    <>
      <Header />
      <main className="loyalty-page">
        <section className="loyalty-hero">
          <p className="loyalty-crumb">Home / Loyalty Card</p>
          <h1>CAFÉTCHA LOYALTY CARD</h1>
          <p>
            Every ₱200 you spend on a completed order earns 1 stamp. Collect all 6
            stamps to claim one free coffee from our Coffee category.
          </p>
        </section>

        <div className="loyalty-body">
          {/* CARD SHOWCASE */}
          <section className="card-showcase">
            <div className="loyalty-card-image">
              <img src="/images/loyalty-card.png" alt="Cafétcha Loyalty Card sample" />
              <span className="loyalty-card-badge">
                <Coffee size={13} /> Cafétcha Loyalty Card
              </span>
            </div>
            <div className="card-info">
              <div className="card-bottom">
                <span>₱200 = 1 stamp</span>
                <span className="card-bottom-divider"></span>
                <span className="card-redeem">6 stamps = 1 FREE COFFEE</span>
              </div>
              <p className="card-caption">
                Sample card — every ₱200 spent on a completed order earns 1 stamp.
                Complete all 6 to redeem one free coffee from the Coffee category.
              </p>
            </div>
          </section>
          {/* HOW IT WORKS */}
          <section className="loyalty-card-block">
            <div className="loyalty-head">
              <span className="loyalty-icon">
                <Stamp size={22} />
              </span>
              <div>
                <h2>How It Works</h2>
                <p>Four easy steps to your free coffee.</p>
              </div>
            </div>
            <div className="loyalty-grid">
              <div className="loyalty-cell">
                <span className="cell-num">1</span>
                <h3>Order &amp; Earn</h3>
                <p>Every ₱200 spent on a completed order earns 1 stamp.</p>
              </div>
              <div className="loyalty-cell">
                <span className="cell-num">2</span>
                <h3>Collect 6</h3>
                <p>Keep ordering until all 6 stamp slots are filled.</p>
              </div>
              <div className="loyalty-cell">
                <span className="cell-num">3</span>
                <h3>Claim in 3 Days</h3>
                <p>Once full, claim your reward within 3 days.</p>
              </div>
              <div className="loyalty-cell">
                <span className="cell-num">4</span>
                <h3>Redeem Free Coffee</h3>
                <p>
                  Redeem 1 free coffee from the Coffee category within 3 days.
                </p>
              </div>
            </div>
          </section>
          {/* RULES */}
          <section className="loyalty-card-block">
            <div className="loyalty-head">
              <span className="loyalty-icon">
                <Gift size={22} />
              </span>
              <div>
                <h2>Loyalty Program Details</h2>
                <p>Everything you need to know about earning and redeeming.</p>
              </div>
            </div>
            <div className="rules-grid">
              <div className="rule-cell">
                <span className="rule-icon">
                  <ShieldCheck size={20} />
                </span>
                <h3>Who can earn?</h3>
                <p>
                  Only registered Cafétcha customers can earn stamps. Guests can
                  browse and customize, but rewards require an account.
                </p>
              </div>
              <div className="rule-cell">
                <span className="rule-icon">
                  <ShoppingCart size={20} />
                </span>
                <h3>When do I earn?</h3>
                <p>
                  Stamps are added automatically once an order reaches Completed —
                  1 stamp for every ₱200 of the order total.
                </p>
              </div>
              <div className="rule-cell">
                <span className="rule-icon">
                  <Trophy size={20} />
                </span>
                <h3>What can I redeem?</h3>
                <p>
                  One free coffee from the Coffee category per completed 6/6 card.
                  You can only redeem once until the next cycle starts.
                </p>
              </div>
              <div className="rule-cell">
                <span className="rule-icon">
                  <Coffee size={20} />
                </span>
                <h3>Where do I see my cards?</h3>
                <p>
                  Your digital card is saved in your account. Check your profile
                  and the notification bell for updates.
                </p>
              </div>
            </div>
            <p className="loyalty-note">
              Questions? Visit the <a href="/faq">FAQs</a> or the{" "}
              <a href="/help">Help Center</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default LoyaltyPage;