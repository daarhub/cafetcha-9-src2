import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import {
  ArrowRight,
  Banknote,
  Bell,
  CheckCircle2,
  Clock,
  Coffee,
  ExternalLink,
  Gift,
  HelpCircle,
  History,
  LogIn,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  ShoppingCart,
  Sparkles,
  Star,
  UserPlus,
  UserRound,
  XCircle,
} from "lucide-react";
import "./HelpPage.css";

const Step = ({ number, children }) => (
  <li className="help-step">
    <span className="step-badge">{number}</span>
    <p>{children}</p>
  </li>
);

function HelpPage() {
  return (
    <>
      <Header />
      <main className="help-page">
        <section className="help-hero">
          <p className="help-crumb">Home / Help</p>
          <h1>CAFÉTCHA HELP CENTER</h1>
          <p>
            Step-by-step guides to browse, customize, order, and get rewarded on
            Cafétcha.
          </p>
        </section>

        <nav className="help-jump" aria-label="Help topics">
          {[
            ["#guest", "Guest Access"],
            ["#signup", "Sign Up"],
            ["#login", "Log In"],
            ["#customer", "Customer Features"],
            ["#ordering", "Place an Order"],
            ["#reviews", "Reviews"],
            ["#contact", "Contact Us"],
          ].map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="help-body">
          {/* 1. GUEST */}
          <section className="help-card" id="guest">
            <div className="help-card-head">
              <span className="help-icon">
                <UserRound size={22} />
              </span>
              <div>
                <h2>1. Start as a Guest</h2>
                <p>When you first open the website, you browse as a guest.</p>
              </div>
            </div>
            <div className="help-columns">
              <div className="help-can">
                <h3>
                  <CheckCircle2 size={16} /> As a guest, you can
                </h3>
                <ul>
                  <li>
                    See the menu, promos, about us, contacts, and Cafétcha
                    information
                  </li>
                  <li>View the 3D customization of the menu items</li>
                  <li>Make / build your own customized drink or meal</li>
                </ul>
              </div>
              <div className="help-cannot">
                <h3>
                  <XCircle size={16} /> As a guest, you cannot
                </h3>
                <ul>
                  <li>Add to cart or order any menu item</li>
                  <li>Write a review</li>
                  <li>Earn or own a loyalty card</li>
                </ul>
              </div>
            </div>
            <p className="help-note">
              <ArrowRight size={14} /> To order and earn rewards, all you need
              is a free account — here's how.
            </p>
          </section>

          {/* 2. SIGN UP */}
          <section className="help-card" id="signup">
            <div className="help-card-head">
              <span className="help-icon">
                <UserPlus size={22} />
              </span>
              <div>
                <h2>2. Create an Account (Sign Up)</h2>
                <p>
                  Signing up takes only a minute and turns you into a Cafétcha
                  customer.
                </p>
              </div>
            </div>
            <ol className="help-steps">
              <Step number={1}>
                Click the <strong>Login / Sign Up</strong> button in the header.
              </Step>
              <Step number={2}>
                Choose <strong>Sign Up</strong>.
              </Step>
              <Step number={3}>
                Enter your <strong>First Name</strong>.
              </Step>
              <Step number={4}>
                Enter your <strong>Last Name</strong>.
              </Step>
              <Step number={5}>
                Enter your <strong>Email Address</strong>.
              </Step>
              <Step number={6}>
                Create a <strong>Password</strong>.
              </Step>
              <Step number={7}>
                Type your password again under <strong>Confirm Password</strong>{" "}
                — both must match.
              </Step>
              <Step number={8}>
                Tap <strong>Create Account</strong>. You are now a Cafétcha
                customer!
              </Step>
            </ol>
          </section>

          {/* 3. LOGIN */}
          <section className="help-card" id="login">
            <div className="help-card-head">
              <span className="help-icon">
                <LogIn size={22} />
              </span>
              <div>
                <h2>3. Log In</h2>
                <p>Already registered? Come right back in.</p>
              </div>
            </div>
            <ol className="help-steps">
              <Step number={1}>
                Click the <strong>Login / Sign Up</strong> button in the header.
              </Step>
              <Step number={2}>
                Enter the <strong>Email Address</strong> you registered with.
              </Step>
              <Step number={3}>
                Enter the <strong>Password</strong> you created earlier.
              </Step>
              <Step number={4}>
                Click <strong>Login</strong> — you're signed in and ready to
                order.
              </Step>
            </ol>
            <p className="help-note">
              <Bell size={14} /> Tip: keep the email and password you used handy
              — you'll need them every time you log in.
            </p>
          </section>

          {/* 4. CUSTOMER FEATURES */}
          <section className="help-card" id="customer">
            <div className="help-card-head">
              <span className="help-icon">
                <Sparkles size={22} />
              </span>
              <div>
                <h2>4. Customer Features</h2>
                <p>
                  Once you're logged in, the full Cafétcha experience opens up.
                </p>
              </div>
            </div>
            <div className="feature-grid">
              <div className="feature-cell">
                <div className="cell-icon">
                  <ShoppingCart size={17} /> Order Menus
                </div>
                <p>
                  Add any menu item to your cart and place real orders for
                  delivery.
                </p>
              </div>
              <div className="feature-cell">
                <div className="cell-icon">
                  <Sparkles size={17} /> Create Custom Orders
                </div>
                <p>Build your own customized drinks and food every time.</p>
              </div>
              <div className="feature-cell">
                <div className="cell-icon">
                  <Gift size={17} /> Earn Loyalty Stamps
                </div>
                <p>
                  Earn 1 stamp for every ₱200 you spend on a completed order.
                </p>
              </div>
              <div className="feature-cell">
                <div className="cell-icon">
                  <Coffee size={17} /> Free Coffee Reward
                </div>
                <p>
                  Collect all 6 stamps to redeem one free coffee from the Coffee
                  category.
                </p>
              </div>
              <div className="feature-cell">
                <div className="cell-icon">
                  <History size={17} /> Recent Orders Saved
                </div>
                <p>
                  Your recent orders are saved so you can reorder them anytime.
                </p>
              </div>
              <div className="feature-cell">
                <div className="cell-icon">
                  <RefreshCcw size={17} /> Smart Suggestions
                </div>
                <p>
                  Your "You Might Like" picks adapt to your recent orders and
                  favorite items for quick re-ordering.
                </p>
              </div>
            </div>
          </section>

          {/* 5. ORDER */}
          <section className="help-card" id="ordering">
            <div className="help-card-head">
              <span className="help-icon">
                <ShoppingCart size={22} />
              </span>
              <div>
                <h2>5. Place an Order</h2>
                <p>Ordering is easy — here's every step from menu to pickup.</p>
              </div>
            </div>
            <ol className="help-steps">
              <Step number={1}>Browse the menu and choose your order.</Step>
              <Step number={2}>
                If the item has more choices, pick your preferred{" "}
                <strong>size, flavor, toppings, and more</strong> — this applies
                to non-customized items, promos, and new arrivals.
              </Step>
              <Step number={3}>
                Tap <strong>Add to Cart</strong>.
              </Step>
              <Step number={4}>
                Open your cart and click <strong>Buy Now</strong>.
              </Step>
              <Step number={5}>
                Choose your location — type your{" "}
                <strong>House Number and Zone</strong> first, then select your{" "}
                <strong>Barangay</strong> from the dropdown of all 26 barangays
                in Hagonoy.
              </Step>
              <Step number={6}>
                Optional: set your <strong>full address in your Profile</strong>{" "}
                once, and it will be pre-filled so you won't have to type it
                again.
              </Step>
              <Step number={7}>
                Optional: leave a <strong>note</strong> for the rider or about
                your order.
              </Step>
              <Step number={8}>
                Choose your <strong>delivery method</strong>: Cash on Delivery,
                GCash, or PayPal.
              </Step>
              <Step number={9}>
                Confirm — <strong>your transaction is complete!</strong>
              </Step>
              <Step number={10}>
                Track your order through the <strong>notification bell</strong>{" "}
                in the header.
              </Step>
              <Step number={11}>
                After you pick up your order, your transaction is complete.
              </Step>
              <Step number={12}>
                Optional: leave a <strong>review</strong> of your experience.
              </Step>
            </ol>
            <p className="help-note">
              <Banknote size={14} /> See all delivery fees, payment methods, and
              coverage on the <a href="/delivery">Delivery Info page</a>.
            </p>
            <p className="help-note">
              <Gift size={14} /> Curious about rewards? Learn more on the{" "}
              <a href="/loyalty">Loyalty Card page</a>.
            </p>
          </section>

          {/* 6. REVIEWS */}
          <section className="help-card" id="reviews">
            <div className="help-card-head">
              <span className="help-icon">
                <Star size={22} />
              </span>
              <div>
                <h2>6. Reviews</h2>
                <p>Share your favorite Cafétcha moments.</p>
              </div>
            </div>
            <ol className="help-steps">
              <Step number={1}>Make sure you're logged in as a customer.</Step>
              <Step number={2}>
                Complete a transaction and pick up your order.
              </Step>
              <Step number={3}>
                Leave a review whenever you're ready — only logged-in customers
                who have completed orders can review.
              </Step>
            </ol>
          </section>

          {/* 7. CONTACT */}
          <section className="help-card" id="contact">
            <div className="help-card-head">
              <span className="help-icon">
                <MapPin size={22} />
              </span>
              <div>
                <h2>7. Contact Us</h2>
                <p>We'd love to hear from you.</p>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-item">
                <MapPin size={20} className="cell-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Sto. Niño, Hagonoy, Bulacan</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={20} className="cell-icon" />
                <div>
                  <h4>Open</h4>
                  <p>3:00 PM – 11:00 PM</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} className="cell-icon" />
                <div>
                  <h4>Contact Number</h4>
                  <p>0910 182 1406</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} className="cell-icon" />
                <div>
                  <h4>Email</h4>
                  <p>cafetcha.official@gmail.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* RELATED PAGES */}
          <section className="help-card">
            <div className="help-card-head">
              <span className="help-icon">
                <ExternalLink size={22} />
              </span>
              <div>
                <h2>Related Pages</h2>
                <p>Everything you need, in one place.</p>
              </div>
            </div>
            <div className="help-rel-grid">
              <a href="/delivery" className="help-rel-card">
                <Banknote size={20} />
                <div>
                  <h3>Delivery Info</h3>
                  <p>
                    Delivery fees for all 26 barangays and accepted payment
                    methods.
                  </p>
                </div>
                <ArrowRight size={16} />
              </a>
              <a href="/loyalty" className="help-rel-card">
                <Gift size={20} />
                <div>
                  <h3>Loyalty Card</h3>
                  <p>
                    How to earn loyalty cards and redeem a free coffee of your
                    choice.
                  </p>
                </div>
                <ArrowRight size={16} />
              </a>
              <a href="/faq" className="help-rel-card">
                <HelpCircle size={20} />
                <div>
                  <h3>FAQs</h3>
                  <p>
                    Quick answers to the most common questions about Cafétcha.
                  </p>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HelpPage;
