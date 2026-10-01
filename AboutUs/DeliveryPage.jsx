import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import {
  Banknote,
  Bike,
  Clock,
  CreditCard,
  Headset,
  MapPin,
  NotebookPen,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import "./DeliveryPage.css";
// The 26 barangays and their fees live in one shared config used by the
// profile address book and checkout too, so the lists can never drift apart.
import { DELIVERY_FEES } from "../Customer/deliveryConfig";

function DeliveryPage() {
  return (
    <>
      <Header />
      <main className="delivery-page">
        <section className="delivery-hero">
          <p className="delivery-crumb">Home / Delivery Info</p>
          <h1>CAFÉTCHA DELIVERY</h1>
          <p>
            Freshly made and delivered to your door — we cover all 26 barangays
            of Hagonoy, Bulacan.
          </p>
        </section>

        <section className="delivery-stats">
          <div className="stat-card">
            <MapPin size={22} />
            <strong>26</strong>
            <span>Barangays covered</span>
          </div>
          <div className="stat-card">
            <Banknote size={22} />
            <strong>₱0 – ₱30</strong>
            <span>Delivery fees</span>
          </div>
          <div className="stat-card">
            <Wallet size={22} />
            <strong>3</strong>
            <span>Payment methods</span>
          </div>
          <div className="stat-card">
            <Clock size={22} />
            <strong>3 PM – 11 PM</strong>
            <span>Open daily</span>
          </div>
        </section>

        <div className="delivery-body">
          {/* HOW DELIVERY WORKS */}
          <section className="delivery-card">
            <div className="delivery-card-head">
              <span className="delivery-icon">
                <Bike size={22} />
              </span>
              <div>
                <h2>How Delivery Works</h2>
                <p>From your cart to your doorstep in a few steps.</p>
              </div>
            </div>
            <ol className="delivery-steps">
              <li>
                <span className="step-badge">1</span>
                <p>
                  Add your favorite menus to your cart and click{" "}
                  <strong>Buy Now</strong>.
                </p>
              </li>
              <li>
                <span className="step-badge">2</span>
                <p>
                  Type your <strong>House Number and Zone</strong>.
                </p>
              </li>
              <li>
                <span className="step-badge">3</span>
                <p>
                  Select your <strong>Barangay</strong> from all 26 barangays in
                  Hagonoy.
                </p>
              </li>
              <li>
                <span className="step-badge">4</span>
                <p>
                  Optional: leave a <strong>note for the rider</strong> or about
                  your order.
                </p>
              </li>
              <li>
                <span className="step-badge">5</span>
                <p>
                  Choose your <strong>delivery method</strong> and confirm your
                  order.
                </p>
              </li>
            </ol>
            <p className="delivery-note">
              <NotebookPen size={14} /> Save your full address in your{" "}
              <strong>Profile</strong> once, and it will be automatically
              pre-filled on your next order.
            </p>
          </section>
          {/* PAYMENT METHODS */}
          <section className="delivery-card">
            <div className="delivery-card-head">
              <span className="delivery-icon">
                <Wallet size={22} />
              </span>
              <div>
                <h2>Payment Methods</h2>
                <p>Pay the way that suits you best.</p>
              </div>
            </div>
            <div className="pay-grid">
              <div className="pay-method">
                <span className="pay-icon">
                  <Banknote size={20} />
                </span>
                <h3>Cash on Delivery</h3>
                <p>Pay in cash when your order arrives at your door.</p>
              </div>
              <div className="pay-method">
                <span className="pay-icon">
                  <CreditCard size={20} />
                </span>
                <h3>GCash</h3>
                <p>Pay securely with your GCash wallet at checkout.</p>
              </div>
              <div className="pay-method">
                <span className="pay-icon">
                  <CreditCard size={20} />
                </span>
                <h3>PayPal</h3>
                <p>Use your PayPal wallet for a quick and easy checkout.</p>
              </div>
            </div>
          </section>
          {/* DELIVERY FEES */}
          <section className="delivery-card">
            <div className="delivery-card-head">
              <span className="delivery-icon">
                <MapPin size={22} />
              </span>
              <div>
                <h2>Delivery Fees</h2>
                <p>Delivery fees for all 26 barangays of Hagonoy, Bulacan.</p>
              </div>
            </div>
            <div className="fee-grid">
              {DELIVERY_FEES.map(({ barangay, fee }) => (
                <div className="fee-row" key={barangay}>
                  <span className="fee-barangay">{barangay}</span>
                  <span className={fee === "FREE" ? "fee-free" : "fee-price"}>
                    {fee}
                  </span>
                </div>
              ))}
            </div>
          </section>
          {/* GET HELP */}
          <section className="delivery-card">
            <div className="delivery-card-head">
              <span className="delivery-icon">
                <Headset size={22} />
              </span>
              <div>
                <h2>Need More Help?</h2>
                <p>More questions? We've got you covered.</p>
              </div>
            </div>
            <div className="pay-grid">
              <a href="/help" className="pay-method help-link">
                <span className="pay-icon">
                  <Bike size={20} />
                </span>
                <h3>Step-by-step Guide</h3>
                <p>Learn how to order from start to finish on the Help page.</p>
              </a>
              <a href="/faq" className="pay-method help-link">
                <span className="pay-icon">
                  <ShieldCheck size={20} />
                </span>
                <h3>FAQs</h3>
                <p>Quick answers to the most common questions about Cafétcha.</p>
              </a>
              <a href="/loyalty" className="pay-method help-link">
                <span className="pay-icon">
                  <Banknote size={20} />
                </span>
                <h3>Loyalty Card</h3>
                <p>Learn how every ₱200 order brings you closer to a free coffee.</p>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DeliveryPage;