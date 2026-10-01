import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import {
  Bike,
  ClipboardList,
  Coffee,
  Copyright,
  CreditCard,
  FileText,
  RefreshCw,
  Scale,
  ScrollText,
  ShieldAlert,
  ShoppingBag,
  Stamp,
  Star,
  TriangleAlert,
  UserPlus,
} from "lucide-react";
import "./TermsPage.css";

function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="legal-hero">
          <p className="legal-crumb">Home / Terms &amp; Conditions</p>
          <h1>TERMS &amp; CONDITIONS</h1>
          <p>
            Welcome to Cafétcha! These terms set the ground rules for using our
            website and ordering our coffee — written to be simple, fair, and
            easy to understand.
          </p>
          <span className="legal-updated">Last updated: September 1, 2026</span>
        </section>

        <div className="legal-body">
          {/* TABLE OF CONTENTS */}
          <section className="legal-card">
            <div className="legal-card-head">
              <span className="legal-icon">
                <FileText size={20} />
              </span>
              <div>
                <h2>On This Page</h2>
                <p>Jump to any section of these terms.</p>
              </div>
            </div>
            <div className="legal-toc">
              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#about">About Cafétcha</a>
              <a href="#accounts">Guests &amp; Accounts</a>
              <a href="#menu">Menu &amp; Pricing</a>
              <a href="#orders">Placing Orders</a>
              <a href="#payment">Payment Terms</a>
              <a href="#delivery">Delivery Terms</a>
              <a href="#loyalty">Loyalty Card Program</a>
              <a href="#reviews">Reviews &amp; Content</a>
              <a href="#use">Acceptable Use</a>
              <a href="#ip">Intellectual Property</a>
              <a href="#liability">Liability</a>
              <a href="#changes">Changes to These Terms</a>
              <a href="#contact">Governing Law &amp; Contact</a>
            </div>
          </section>

          {/* 1. ACCEPTANCE OF TERMS */}
          <section className="legal-card" id="acceptance">
            <div className="legal-card-head">
              <span className="legal-icon">
                <ScrollText size={20} />
              </span>
              <div>
                <h2>1. Acceptance of Terms</h2>
                <p>The agreement you make when you use Cafétcha.</p>
              </div>
            </div>
            <p>
              By accessing or using the Cafétcha website — whether you are
              browsing as a guest, creating an account, placing an order, or
              writing a review — you agree to be bound by these Terms &amp;
              Conditions and our <a href="/privacy">Privacy Policy</a>.
            </p>
            <p>
              If you do not agree with any part of these terms, please stop
              using the website. If you are below 18 years old, a parent or
              guardian must review and accept these terms on your behalf before
              you create an account or place an order.
            </p>
          </section>

          {/* 2. ABOUT CAFÉTCHA */}
          <section className="legal-card" id="about">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Coffee size={20} />
              </span>
              <div>
                <h2>2. About Cafétcha</h2>
                <p>Who we are and what our website lets you do.</p>
              </div>
            </div>
            <p>
              Cafétcha ("we", "our", or "us") is a coffee and dine concept
              located at Sto. Niño, Hagonoy, Bulacan, guided by our promise:
              "Craft your perfect cup, your way."
            </p>
            <p>
              Our website lets you browse our menu, promos, and new arrivals;
              customize drinks and food; build your own item from scratch; order
              for delivery within Hagonoy, Bulacan; earn loyalty rewards; and
              share reviews after completed orders.
            </p>
            <p>
              We are open daily from 3 PM to 11 PM. We may update our menu,
              prices, promos, store hours, and website features from time to
              time to serve you better.
            </p>
          </section>

          {/* 3. GUESTS & ACCOUNTS */}
          <section className="legal-card" id="accounts">
            <div className="legal-card-head">
              <span className="legal-icon">
                <UserPlus size={20} />
              </span>
              <div>
                <h2>3. Guest Browsing &amp; Customer Accounts</h2>
                <p>
                  What you can do without an account, and how to keep yours
                  safe.
                </p>
              </div>
            </div>
            <h3>As a Guest</h3>
            <p>
              You can browse the full menu, view promos and new arrivals,
              explore our 3D customization, and build your own drink without
              creating an account. Adding to cart, placing orders, writing
              reviews, and earning loyalty cards require a free Cafétcha
              account.
            </p>
            <h3>Creating Your Account</h3>
            <p>
              When you sign up, you agree to provide accurate, current, and
              complete information — your First Name, Last Name, and a valid
              Email Address — and to keep your details up to date.
            </p>
            <h3>Keeping Your Account Secure</h3>
            <ul className="legal-list">
              <li>
                Keep your password confidential and never share it with anyone.
              </li>
              <li>
                You are responsible for all activity that happens under your
                account.
              </li>
              <li>
                Notify us immediately if you suspect unauthorized access to your
                account.
              </li>
            </ul>
          </section>

          {/* 4. MENU & PRICING */}
          <section className="legal-card" id="menu">
            <div className="legal-card-head">
              <span className="legal-icon">
                <ClipboardList size={20} />
              </span>
              <div>
                <h2>4. Menu, Customization &amp; Pricing</h2>
                <p>What to expect from our menu and prices.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Currency</strong> — all prices are in Philippine Peso
                (₱) and include applicable taxes.
              </li>
              <li>
                <strong>Customization</strong> — for items with multiple
                options, you can pick your preferred size, flavor, and toppings;
                other items can be built fully from scratch through the
                Customize cards.
              </li>
              <li>
                <strong>Availability</strong> — items, sizes, and add-ons may be
                unavailable from time to time; we may discontinue or substitute
                items when needed.
              </li>
              <li>
                <strong>Price changes</strong> — prices may change without prior
                notice; the price shown at checkout is what you pay.
              </li>
              <li>
                <strong>Photos</strong> — menu photos are for illustration only;
                your drink is crafted your way, so it may look a little
                different.
              </li>
            </ul>
            <p className="legal-note">
              <TriangleAlert size={14} /> Allergen notice: some drinks and food
              may contain milk, nuts, soy, or other allergens. You are
              responsible for checking ingredients — when in doubt, ask us
              before ordering.
            </p>
          </section>

          {/* 5. PLACING ORDERS */}
          <section className="legal-card" id="orders">
            <div className="legal-card-head">
              <span className="legal-icon">
                <ShoppingBag size={20} />
              </span>
              <div>
                <h2>5. Placing Orders</h2>
                <p>From cart to doorstep, step by step.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Account required</strong> — you need a free Cafétcha
                account to add to cart and place an order.
              </li>
              <li>
                <strong>Accurate details</strong> — provide your complete
                delivery address (house number, zone, and barangay) and any
                order notes so we can serve you correctly.
              </li>
              <li>
                <strong>Order confirmation</strong> — after checkout, follow
                your order status through the notification bell in the header.
              </li>
              <li>
                <strong>Changes &amp; cancellations</strong> — contact us as
                soon as possible; once preparation of your order has started, we
                may no longer be able to change or cancel it.
              </li>
              <li>
                <strong>Our right to refuse</strong> — we may decline or cancel
                an order due to item unavailability, an address outside our
                delivery areas, or suspected fraud.
              </li>
            </ul>
          </section>

          {/* 6. PAYMENT TERMS */}
          <section className="legal-card" id="payment">
            <div className="legal-card-head">
              <span className="legal-icon">
                <CreditCard size={20} />
              </span>
              <div>
                <h2>6. Payment Terms</h2>
                <p>How to pay for your perfect cup.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Accepted methods</strong> — Cash on Delivery (COD),
                GCash, and PayPal.
              </li>
              <li>
                <strong>Total amount</strong> — your total is the sum of your
                items plus the delivery fee for your barangay.
              </li>
              <li>
                <strong>COD</strong> — please prepare the appropriate amount for
                your rider upon delivery.
              </li>
              <li>
                <strong>GCash &amp; PayPal</strong> — payments are processed
                directly by the provider; your order is confirmed once payment
                is completed.
              </li>
              <li>
                <strong>No stored credentials</strong> — we only record which
                payment method you used and never store your wallet or card
                details.
              </li>
            </ul>
          </section>

          {/* 7. DELIVERY TERMS */}
          <section className="legal-card" id="delivery">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Bike size={20} />
              </span>
              <div>
                <h2>7. Delivery Terms</h2>
                <p>Bringing your order across Hagonoy, Bulacan.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Coverage</strong> — we deliver to all 26 barangays of
                Hagonoy, Bulacan.
              </li>
              <li>
                <strong>Fees</strong> — delivery is FREE for Santo Niño and
                ranges from ₱10 to ₱30 depending on your barangay. The full fee
                list is on the <a href="/help">Help page</a>.
              </li>
              <li>
                <strong>Accurate address</strong> — double-check your house
                number, zone, and barangay; we deliver to the address you
                provide.
              </li>
              <li>
                <strong>Failed deliveries</strong> — if you are unreachable or
                the address is incorrect, we will try to contact you;
                undeliverable orders may be returned and treated per our refund
                policy.
              </li>
              <li>
                <strong>Delays</strong> — weather, traffic, and peak hours may
                extend delivery times. We appreciate your patience!
              </li>
            </ul>
          </section>

          {/* 8. LOYALTY CARD PROGRAM */}
          <section className="legal-card" id="loyalty">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Stamp size={20} />
              </span>
              <div>
                <h2>8. Loyalty Card Program</h2>
                <p>Earning your free coffee, one cup at a time.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Earning</strong> — every ₱200 spent on a completed order
                earns you 1 stamp.
              </li>
              <li>
                <strong>Redeeming</strong> — collect all 6 stamps and claim within
                3 days to redeem 1 free coffee from the Coffee category.
              </li>
              <li>
                <strong>One per card</strong> — only one free coffee can be redeemed
                per 6/6 card. Placing the reward order starts the next cycle
                immediately.
              </li>
              <li>
                <strong>Ownership</strong> — stamps are tied to your
                account, cannot be transferred to other accounts, and have no
                cash value.
              </li>
              <li>
                <strong>Adjustments</strong> — cards earned from cancelled or
                refunded orders may be removed.
              </li>
              <li>
                <strong>Fair play</strong> — we may modify, suspend, or end the
                program with notice, and may forfeit cards earned through abuse
                (e.g., fake or duplicate orders).
              </li>
            </ul>
          </section>

          {/* 9. REVIEWS & USER CONTENT */}
          <section className="legal-card" id="reviews">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Star size={20} />
              </span>
              <div>
                <h2>9. Reviews &amp; User Content</h2>
                <p>Sharing honest thoughts, the friendly way.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Who can review</strong> — only signed-in customers, and
                reviews become available after a completed order has been picked
                up.
              </li>
              <li>
                <strong>Keep it kind</strong> — reviews must be truthful and
                respectful; no spam, profanity, harassment, or personal
                information of other people.
              </li>
              <li>
                <strong>Your license to us</strong> — by posting a review, you
                allow Cafétcha to display it on our website and use it to
                improve our service.
              </li>
              <li>
                <strong>Our right to moderate</strong> — we may remove any
                review that violates these terms or the law.
              </li>
            </ul>
          </section>

          {/* 10. ACCEPTABLE USE */}
          <section className="legal-card" id="use">
            <div className="legal-card-head">
              <span className="legal-icon">
                <ShieldAlert size={20} />
              </span>
              <div>
                <h2>10. Acceptable Use</h2>
                <p>The do-not list for a safe and fair Cafétcha.</p>
              </div>
            </div>
            <p>When using our website, you agree NOT to:</p>
            <ul className="legal-list">
              <li>Place fake, prank, or duplicate orders.</li>
              <li>Provide false information or impersonate another person.</li>
              <li>
                Attempt to access accounts, systems, or the staff/admin login
                area without authorization.
              </li>
              <li>
                Interfere with the website's normal operation, including
                scraping or automated abuse.
              </li>
              <li>Use the website for any unlawful purpose.</li>
            </ul>
            <p>
              We may suspend or terminate accounts that violate these rules, and
              report unlawful activity to the proper authorities.
            </p>
          </section>

          {/* 11. INTELLECTUAL PROPERTY */}
          <section className="legal-card" id="ip">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Copyright size={20} />
              </span>
              <div>
                <h2>11. Intellectual Property</h2>
                <p>The Cafétcha name and everything on this site.</p>
              </div>
            </div>
            <p>
              The Cafétcha name, logo, menu items, images, text, design, and all
              other content on this website are owned by or licensed to Cafétcha
              and are protected under applicable intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, modify, or reuse any part of this
              website or its content for commercial purposes without our prior
              written permission. Your personal information is always handled
              separately under our <a href="/privacy">Privacy Policy</a>.
            </p>
          </section>

          {/* 12. LIABILITY */}
          <section className="legal-card" id="liability">
            <div className="legal-card-head">
              <span className="legal-icon">
                <TriangleAlert size={20} />
              </span>
              <div>
                <h2>12. Disclaimers &amp; Limitation of Liability</h2>
                <p>Being fair and realistic, both ways.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Website "as is"</strong> — the website is provided
                without warranties of any kind beyond what is stated here.
              </li>
              <li>
                <strong>Preparation</strong> — drinks and food are prepared with
                care, but final taste depends on your chosen customization.
              </li>
              <li>
                <strong>Allergens</strong> — we cannot guarantee any item is
                allergen-free; you are responsible for checking ingredients with
                us.
              </li>
              <li>
                <strong>Our liability</strong> — to the fullest extent allowed
                by law, Cafétcha is not liable for indirect or consequential
                losses, and our total liability for any claim is limited to the
                amount you paid for the order giving rise to that claim.
              </li>
            </ul>
            <p>
              Nothing in these terms limits your rights as a consumer under
              Philippine law.
            </p>
          </section>

          {/* 13. CHANGES TO THESE TERMS */}
          <section className="legal-card" id="changes">
            <div className="legal-card-head">
              <span className="legal-icon">
                <RefreshCw size={20} />
              </span>
              <div>
                <h2>13. Changes to These Terms</h2>
                <p>How updates are handled.</p>
              </div>
            </div>
            <p>
              We may update these Terms &amp; Conditions from time to time. The
              "Last updated" date at the top of this page always shows the
              current version, and significant changes may also be announced on
              the website.
            </p>
            <p>
              Continuing to use the website after an update means you accept the
              revised terms.
            </p>
          </section>

          {/* 14. GOVERNING LAW & CONTACT */}
          <section className="legal-card" id="contact">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Scale size={20} />
              </span>
              <div>
                <h2>14. Governing Law &amp; Contact</h2>
                <p>The rules behind the rules — and how to reach us.</p>
              </div>
            </div>
            <p>
              These Terms &amp; Conditions are governed by the laws of the
              Republic of the Philippines, and any disputes will be resolved in
              the appropriate courts of Bulacan.
            </p>
            <p>
              Questions, concerns, or feedback about these terms? Reach us
              anytime:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Address:</strong> Sto. Niño, Hagonoy, Bulacan
              </li>
              <li>
                <strong>Phone:</strong> 0910 182 1406
              </li>
              <li>
                <strong>Email:</strong> hellocafetcha@gmail.com
              </li>
              <li>
                <strong>Hours:</strong> Open 3 PM – 11 PM daily
              </li>
            </ul>
            <p className="legal-note">
              Thank you for reading! Your privacy matters too — please also read
              our <a href="/privacy">Privacy Policy</a> to know how your
              information is protected.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TermsPage;
