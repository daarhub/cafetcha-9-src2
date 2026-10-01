import React, { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import AdminLoginModal from "../Admin/AdminLoginModal";
import StaffLoginModal from "../Staff/StaffLoginModal";
import "./Footer.css";

function Footer() {
  // Quick Links scroll smoothly when the guest is already on the home
  // page; from any other page the plain href navigates as usual.
  const isHome = window.location.pathname.replace(/\/+$/, "") === "/";

  // The footer is rendered on every page, so the Admin Login and Staff Login
  // modals live here — "Admin Login" / "Staff Login" below open them from
  // anywhere on the site.
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [staffLoginOpen, setStaffLoginOpen] = useState(false);

  const smoothScrollTo = (event, targetId) => {
    if (!isHome) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const smoothScrollToTop = (event) => {
    if (!isHome) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="footer">
      {/* =========================
          BRAND
      ========================= */}

      <div className="footer-brand">
        <h2>Cafétcha</h2>

        <p>Craft your perfect cup, your way.</p>
      </div>

      {/* =========================
          LINKS
      ========================= */}

      <div className="footer-links">
        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/" onClick={smoothScrollToTop}>
            Home
          </a>
          <a
            href="/#highlights"
            onClick={(event) => smoothScrollTo(event, "highlights")}
          >
            Highlights
          </a>
          <a href="/#menu" onClick={(event) => smoothScrollTo(event, "menu")}>
            Menu
          </a>
          <a
            href="/#reviews"
            onClick={(event) => smoothScrollTo(event, "reviews")}
          >
            Reviews
          </a>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className="footer-column">
          <h3>Customer Support</h3>

          <a href="/help">Help</a>
          <a href="/faq">FAQs</a>
          <a href="/delivery">Delivery Info</a>
          <a href="/loyalty">Loyalty Card Detail</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-column">
          <h3>Contact Information</h3>

          <div className="footer-contact">
            <p>
              <MapPin size={12} /> Sto. Niño, Hagonoy, Bulacan
            </p>
            <p>
              <Clock size={12} /> Open 3 PM – 11 PM
            </p>
            <p>
              <Phone size={12} /> 0910 182 1406
            </p>
            <p>
              <Mail size={12} /> cafetcha.official@gmail.com
            </p>
          </div>
        </div>

        {/* OTHER LINKS */}
        <div className="footer-column">
          <h3>Other Links</h3>

          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a
            href="#staff-login"
            onClick={(event) => {
              event.preventDefault();
              setStaffLoginOpen(true);
            }}
          >
            Staff Login
          </a>
          <a
            href="#admin-login"
            onClick={(event) => {
              event.preventDefault();
              setAdminLoginOpen(true);
            }}
          >
            Admin Login
          </a>
        </div>
      </div>

      {/* =========================
          SOCIALS
      ========================= */}

      <div className="footer-socials">
        <a href="https://www.instagram.com/cafetcha2026/" className="footer-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="" />
        </a>

        <a href="https://www.facebook.com/share/1EnfBrap2h/" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.png" alt="" />
        </a>

        <a href="https://m.me/celchzelli.21" className="footer-social" aria-label="Messenger" target="_blank" rel="noopener noreferrer">
          <img src="/images/messenger.png" alt="" />
        </a>
      </div>

      {/* =========================
          COPYRIGHT
      ========================= */}

      <div className="footer-bottom">
        <p>© 2026 Cafétcha. All Rights Reserved.</p>
      </div>

      {/* ADMIN LOGIN MODAL — a successful login routes to the dashboard */}
      {adminLoginOpen && (
        <AdminLoginModal
          onClose={() => setAdminLoginOpen(false)}
          onLoginSuccess={() => window.location.assign("/admin")}
        />
      )}

      {/* STAFF LOGIN MODAL — a successful login routes to the staff dashboard */}
      {staffLoginOpen && (
        <StaffLoginModal
          onClose={() => setStaffLoginOpen(false)}
          onLoginSuccess={() => window.location.assign("/staff")}
        />
      )}
    </footer>
  );
}

export default Footer;
