import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import {
  Ban,
  BellRing,
  Cookie,
  CreditCard,
  Database,
  FileText,
  Fingerprint,
  Lock,
  Mail,
  PenLine,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import "./PrivacyPage.css";

function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="legal-hero">
          <p className="legal-crumb">Home / Privacy Policy</p>
          <h1>PRIVACY POLICY</h1>
          <p>
            Your privacy matters to us. This policy explains what information we
            collect, how we use it, and the choices you have — so you can enjoy
            Cafétcha with peace of mind.
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
                <p>Jump to any section of this policy.</p>
              </div>
            </div>
            <div className="legal-toc">
              <a href="#intro">Introduction</a>
              <a href="#collect">Information We Collect</a>
              <a href="#use">How We Use Your Information</a>
              <a href="#share">Information Sharing</a>
              <a href="#cookies">Cookies &amp; Local Storage</a>
              <a href="#security">Data Security</a>
              <a href="#rights">Your Rights</a>
              <a href="#children">Children's Privacy</a>
              <a href="#changes">Changes to This Policy</a>
              <a href="#contact">Contact Us</a>
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="legal-card" id="intro">
            <div className="legal-card-head">
              <span className="legal-icon">
                <ShieldCheck size={20} />
              </span>
              <div>
                <h2>1. Introduction</h2>
                <p>Our commitment to protecting your personal information.</p>
              </div>
            </div>
            <p>
              Cafétcha ("we", "our", or "us") respects your privacy and is
              committed to protecting the personal information you share with us
              when you visit our website, create an account, place an order, or
              use any of our services.
            </p>
            <p>
              This Privacy Policy explains what data we collect, why we collect
              it, how we use and protect it, and the choices you have regarding
              your information. By using the Cafétcha website, you agree to the
              practices described in this policy.
            </p>
          </section>

          {/* INFORMATION WE COLLECT */}
          <section className="legal-card" id="collect">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Database size={20} />
              </span>
              <div>
                <h2>2. Information We Collect</h2>
                <p>
                  The details you provide and the data generated while you
                  browse.
                </p>
              </div>
            </div>
            <h3>Account Information</h3>
            <ul className="legal-list">
              <li>
                <strong>First and Last Name</strong> — used to identify you as a
                customer.
              </li>
              <li>
                <strong>Email Address</strong> — used to log in, recover your
                account, and send order updates.
              </li>
              <li>
                <strong>Password</strong> — stored securely and encrypted; never
                shared with anyone.
              </li>
            </ul>
            <h3>Order &amp; Delivery Information</h3>
            <ul className="legal-list">
              <li>
                <strong>Delivery Address</strong> — house number, zone, and
                barangay in Hagonoy, Bulacan, used to deliver your order.
              </li>
              <li>
                <strong>Order History</strong> — your past orders and customized
                items so you can easily reorder.
              </li>
              <li>
                <strong>Order Notes</strong> — any note you leave for the rider
                or about your order.
              </li>
            </ul>
            <h3>Payment Information</h3>
            <ul className="legal-list">
              <li>
                <strong>Payment Method</strong> — Cash on Delivery, GCash, or
                PayPal. We only record which method you used; we do not store
                full payment card or wallet details on our servers.
              </li>
            </ul>
            <p className="legal-note">
              <Fingerprint size={14} /> As a guest, you can browse the menu,
              view promotions, and customize drinks without providing personal
              information. You only share your details when you create an
              account.
            </p>
          </section>

          {/* HOW WE USE YOUR INFORMATION */}
          <section className="legal-card" id="use">
            <div className="legal-card-head">
              <span className="legal-icon">
                <UserCog size={20} />
              </span>
              <div>
                <h2>3. How We Use Your Information</h2>
                <p>We use your data to make your Cafétcha experience better.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>To process your orders</strong> — from adding items to
                cart to delivery at your doorstep.
              </li>
              <li>
                <strong>To manage your account</strong> — letting you log in,
                view your profile, and update your saved address.
              </li>
              <li>
                <strong>To offer the Loyalty Card program</strong> — tracking
                your ₱200-per-card points and free coffee rewards.
              </li>
              <li>
                <strong>To save your recent orders and custom items</strong> —
                so you can reorder with a single tap.
              </li>
              <li>
                <strong>To send order notifications</strong> — status updates
                through the notification bell in the header.
              </li>
              <li>
                <strong>To improve our service</strong> — understanding how
                customers use the menu and website to make it better.
              </li>
              <li>
                <strong>To respond to your reviews and inquiries</strong> —
                including your help and FAQ requests.
              </li>
            </ul>
            <p>
              We never sell your personal information to third parties for their
              marketing purposes.
            </p>
          </section>

          {/* INFORMATION SHARING */}
          <section className="legal-card" id="share">
            <div className="legal-card-head">
              <span className="legal-icon">
                <CreditCard size={20} />
              </span>
              <div>
                <h2>4. Information Sharing</h2>
                <p>
                  Who we share your details with — and who we never share them
                  with.
                </p>
              </div>
            </div>
            <p>
              We do not sell, rent, or trade your personal information to third
              parties for their own marketing purposes. We only share your
              details with the people who genuinely need them to serve you:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Our delivery riders</strong> — receive your delivery
                address and order details so your order arrives at your
                doorstep.
              </li>
              <li>
                <strong>Payment providers</strong> — GCash and PayPal process
                your payments directly; we only record which payment method you
                used.
              </li>
              <li>
                <strong>Legal authorities</strong> — when disclosure is required
                by law, or to protect our rights, property, or the safety of
                others.
              </li>
            </ul>
            <p className="legal-note">
              <Ban size={14} /> Your information is never shared with
              advertisers or data brokers. What happens in your cup stays
              between you and Cafétcha.
            </p>
          </section>

          {/* COOKIES & LOCAL STORAGE */}
          <section className="legal-card" id="cookies">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Cookie size={20} />
              </span>
              <div>
                <h2>5. Cookies &amp; Local Storage</h2>
                <p>The small bits of data that keep your experience smooth.</p>
              </div>
            </div>
            <p>
              We use only functional cookies and local storage — nothing is used
              to track you around the internet. They help us:
            </p>
            <ul className="legal-list">
              <li>Keep you signed in during your visit.</li>
              <li>Remember the items in your cart while you shop.</li>
              <li>
                Save your recent orders and customized items for quick
                reordering.
              </li>
              <li>Remember your preferences so the website feels familiar.</li>
            </ul>
            <p>
              We do not use third-party advertising or tracking cookies. If you
              clear your browser storage, you may be signed out and your saved
              cart cleared — simply log back in to continue.
            </p>
          </section>

          {/* DATA SECURITY */}
          <section className="legal-card" id="security">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Lock size={20} />
              </span>
              <div>
                <h2>6. Data Security</h2>
                <p>How we protect the information you trust us with.</p>
              </div>
            </div>
            <ul className="legal-list">
              <li>
                <strong>Encrypted passwords</strong> — your password is stored
                using industry-standard encryption and can never be read by
                anyone, including us.
              </li>
              <li>
                <strong>Restricted access</strong> — only authorized staff can
                access customer information, and only for legitimate purposes
                like fulfilling your order.
              </li>
              <li>
                <strong>Minimum exposure</strong> — we do not store your full
                GCash or PayPal credentials on our servers.
              </li>
            </ul>
            <p>
              While no system can guarantee absolute security, we apply
              reasonable and appropriate safeguards consistent with the Data
              Privacy Act of 2012 (RA 10173). If you believe your account has
              been compromised, contact us right away so we can help secure it.
            </p>
          </section>

          {/* YOUR RIGHTS */}
          <section className="legal-card" id="rights">
            <div className="legal-card-head">
              <span className="legal-icon">
                <PenLine size={20} />
              </span>
              <div>
                <h2>7. Your Rights</h2>
                <p>You are in control of your personal information.</p>
              </div>
            </div>
            <p>
              Under the Data Privacy Act of 2012 (RA 10173), you have the right
              to:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Access</strong> — request a copy of the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correct</strong> — ask us to fix any inaccurate or
                outdated details, like your name or address.
              </li>
              <li>
                <strong>Delete</strong> — request deletion of your account and
                the personal data connected to it.
              </li>
              <li>
                <strong>Object or withdraw consent</strong> — stop us from
                processing your information for a specific purpose.
              </li>
              <li>
                <strong>Data portability</strong> — receive your data in a
                format you can take with you.
              </li>
              <li>
                <strong>File a complaint</strong> — raise concerns with us
                first, or with the National Privacy Commission.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at
              hellocafetcha@gmail.com or message us at 0910 182 1406. We respond
              to requests within a reasonable period.
            </p>
          </section>

          {/* CHILDREN'S PRIVACY */}
          <section className="legal-card" id="children">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Ban size={20} />
              </span>
              <div>
                <h2>8. Children's Privacy</h2>
                <p>Protecting young coffee lovers.</p>
              </div>
            </div>
            <p>
              Cafétcha is not directed at children under 13, and we do not
              knowingly collect personal information from them. If you believe a
              child under 13 has provided us with personal information, please
              contact us so we can delete it promptly.
            </p>
            <p>
              If you are 13 to 17 years old, please ask a parent or guardian for
              permission before creating an account or placing an order.
            </p>
          </section>

          {/* CHANGES TO THIS POLICY */}
          <section className="legal-card" id="changes">
            <div className="legal-card-head">
              <span className="legal-icon">
                <BellRing size={20} />
              </span>
              <div>
                <h2>9. Changes to This Policy</h2>
                <p>Keeping you informed when something changes.</p>
              </div>
            </div>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services or the law. The "Last updated" date at the
              top of this page always shows the current version.
            </p>
            <p>
              If a change is significant, we will let you know through the
              notification bell in the header or by email. Continuing to use the
              website after an update means you accept the revised policy.
            </p>
          </section>

          {/* CONTACT US */}
          <section className="legal-card" id="contact">
            <div className="legal-card-head">
              <span className="legal-icon">
                <Mail size={20} />
              </span>
              <div>
                <h2>10. Contact Us</h2>
                <p>Questions about your privacy? We're happy to help.</p>
              </div>
            </div>
            <p>
              If you have any questions, requests, or concerns about this
              Privacy Policy or how your data is handled, reach us anytime:
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
              While you're here, you may also read our{" "}
              <a href="/terms">Terms &amp; Conditions</a> — they explain the
              rules for ordering and using the Cafétcha website.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPage;
