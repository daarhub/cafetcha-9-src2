import {
  Bell,
  ClipboardList,
  Gift,
  Newspaper,
  ShoppingCart,
  Trash2,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import AccountMenu from "../Customer/AccountMenu";
import AuthModal from "../Customer/AuthModal";
import Toasts from "../Customer/Toasts";
import LoginModal from "./LoginModal";
import {
  clearCustomerNotifications,
  deleteCustomerNotification,
  getAnnouncements,
  getCartCount,
  getCustomerNotifications,
  markCustomerNotificationsRead,
  useCustomerStore,
} from "../Customer/customerStore";
import "./Header.css";

function Header() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  // The Loyalty Card nav item lights up only inside the profile's Loyalty
  // Card section (?tab=loyalty) — not on the other profile pages.
  const profileTab = new URLSearchParams(window.location.search).get("tab");
  // Logged-in customers see their account chip and a real cart count;
  // guests see the Login / Sign Up button and a login-required gate.
  const { customer, cart } = useCustomerStore();
  const [authOpen, setAuthOpen] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  // Stamp rewards and order updates live per customer in the store; the
  // header re-renders whenever the store emits. Announcements are the
  // store-wide "News & Updates" every visitor sees.
  const announcements = getAnnouncements();
  const notifications = customer ? getCustomerNotifications() : [];
  const orderNotifications = notifications.filter(
    (entry) => entry.kind === "order",
  );
  const reviewNotifications = notifications.filter(
    (entry) => entry.kind === "review",
  );
  const otherNotifications = notifications.filter(
    (entry) => entry.kind !== "order" && entry.kind !== "review",
  );
  const unread = notifications.filter((entry) => !entry.read).length;

  return (
    <header className="header">
      {/* Logo */}
      <a href="/" className="logo">
        <img
          src="/images/logo.png"
          alt="Cafétcha Logo"
          className="logo-image"
        />

        <span className="logo-name">Cafétcha</span>
      </a>

      {/* Center Navigation */}
      <nav className="navbar">
        <a href="/" className={path === "/" ? "active" : ""}>
          Home
        </a>

        <a href="/menu" className={path === "/menu" ? "active" : ""}>Menu</a>

        <a href="/our-story" className={path === "/our-story" ? "active" : ""}>Our Story</a>

        {/* Once logged in, Help makes way for the Loyalty Card — its
           function arrives later, so this links to the loyalty page. */}
        {customer ? (
          <a
            href="/profile?tab=loyalty"
            className={
              path === "/profile" && profileTab === "loyalty" ? "active" : ""
            }
          >
            Loyalty Card
          </a>
        ) : (
          <a href="/help" className={path === "/help" ? "active" : ""}>Help</a>
        )}
      </nav>

      {/* Right Actions */}
      <div className="header-actions">
        {/* Notification bell — loyalty stamps and reward updates land here.
            Opening it marks everything as read. */}
        <button
          className="icon-button notif-button"
          aria-label="Notifications"
          onClick={() => {
            const next = !bellOpen;
            setBellOpen(next);
            if (next && unread > 0) markCustomerNotificationsRead();
          }}
        >
          <Bell size={22} strokeWidth={1.8} />
          {unread > 0 && <span className="notif-dot" />}
        </button>

        {/* Shopping Cart — opens the cart page for customers; guests get
           the login-required gate first */}
        <button
          className="icon-button"
          aria-label="Shopping Cart"
          onClick={() =>
            customer
              ? (window.location.href = "/cart")
              : setGateOpen(true)
          }
        >
          <ShoppingCart size={22} strokeWidth={1.8} />

          <span className="cart-count">
            {customer ? getCartCount(cart) : 0}
          </span>
        </button>

        {/* Account chip (initials + first name + caret) replaces the
           Login / Sign Up button once logged in */}
        {customer ? (
          <AccountMenu
            onOpenCart={() => {
              window.location.href = "/cart";
            }}
          />
        ) : (
          <button
            className="login-button"
            onClick={() => setAuthOpen(true)}
          >
            <UserRound size={17} strokeWidth={1.8} />

            <span>Login / Sign Up</span>
          </button>
        )}
      </div>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      {gateOpen && (
        <LoginModal
          onClose={() => setGateOpen(false)}
          onLogin={() => {
            setGateOpen(false);
            setAuthOpen(true);
          }}
        />
      )}
      {/* Notification dropdown — portaled because the fixed header's
         backdrop-filter would otherwise offset a fixed child */}
      {bellOpen &&
        createPortal(
          <>
            <div
              className="notif-backdrop"
              role="presentation"
              onClick={() => setBellOpen(false)}
            />
            <div className="notif-panel" role="dialog" aria-label="Notifications">
              <div className="notif-head">
                <h3>Notifications</h3>
                {notifications.length > 0 && (
                  <button
                    type="button"
                    onClick={() => clearCustomerNotifications()}
                  >
                    Clear all
                  </button>
                )}
              </div>
              {announcements.length === 0 && notifications.length === 0 ? (
                <p className="notif-empty">
                  Nothing yet — news, stamp rewards and order updates will
                  appear here.
                </p>
              ) : (
                <>
              {orderNotifications.length > 0 && (
                <>
                  <p className="notif-section-label">Order Updates</p>
                  <ul className="notif-list">
                    {orderNotifications.map((entry) => (
                      <li
                        key={entry.id}
                        className={`notif-order-card${entry.read ? "" : " unread"}`}
                        onClick={() => {
                          setBellOpen(false);
                          window.location.href = entry.orderId
                            ? `/profile?tab=orders&order=${encodeURIComponent(entry.orderId)}`
                            : "/profile?tab=orders";
                        }}
                      >
                        <span className="notif-icon">
                          <ClipboardList size={15} />
                        </span>
                        <div className="notif-body">
                          <p className="notif-title">
                            {entry.orderCode || "Order update"}
                          </p>
                          <p>{entry.text}</p>
                          <span
                            className="notif-order-status"
                            data-status={entry.status}
                          >
                            {entry.status || "Updated"}
                          </span>
                          <time>
                            {new Date(entry.createdAt).toLocaleString()}
                          </time>
                        </div>
                        <button
                          type="button"
                          aria-label="Delete notification"
                          onClick={(event) => {
                            event.stopPropagation();
                            deleteCustomerNotification(entry.id);
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {reviewNotifications.length > 0 && (
                <>
                  <p className="notif-section-label">Review Replies</p>
                  <ul className="notif-list">
                    {reviewNotifications.map((entry) => (
                      <li
                        key={entry.id}
                        className={`notif-review-card${entry.read ? "" : " unread"}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            event.currentTarget.click();
                          }
                        }}
                        onClick={() => {
                          setBellOpen(false);
                          if (entry.targetKind === "product" && entry.productId) {
                            window.location.href = `/menu?reviews=${encodeURIComponent(entry.productId)}&review=${encodeURIComponent(entry.reviewId || "")}`;
                          } else {
                            window.location.href = `/?reviewReplies=true&reviewTarget=store&review=${encodeURIComponent(entry.reviewId || "")}#reviews`;
                          }
                        }}
                      >
                        <span className="notif-icon review">
                          <ClipboardList size={15} />
                        </span>
                        <div className="notif-body">
                          <p className="notif-title">Cafétcha replied to your review</p>
                          <p>{entry.text}</p>
                          <time>
                            {new Date(entry.createdAt).toLocaleString()}
                          </time>
                        </div>
                        <button
                          type="button"
                          aria-label="Delete review notification"
                          onClick={(event) => {
                            event.stopPropagation();
                            deleteCustomerNotification(entry.id);
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {otherNotifications.length > 0 && (
                <>
                  <p className="notif-section-label">For You</p>
                  <ul className="notif-list">
                    {otherNotifications.map((entry) => (
                      <li
                        key={entry.id}
                        className={entry.read ? "" : "unread"}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setBellOpen(false);
                          window.location.href = "/profile?tab=loyalty";
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setBellOpen(false);
                            window.location.href = "/profile?tab=loyalty";
                          }
                        }}
                      >
                        <span className="notif-icon">
                          <Gift size={15} />
                        </span>
                        <div className="notif-body">
                          <p>{entry.text}</p>
                          <time>
                            {new Date(entry.createdAt).toLocaleString()}
                          </time>
                        </div>
                        <button
                          type="button"
                          aria-label="Delete notification"
                          onClick={() => deleteCustomerNotification(entry.id)}
                        >
                          <Trash2 size={13} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {announcements.length > 0 && (
                <>
                  <p className="notif-section-label">News &amp; Updates</p>
                  <ul className="notif-list">
                    {announcements.map((entry) => (
                      <li key={entry.id}>
                        <span className="notif-icon news">
                          <Newspaper size={15} />
                        </span>
                        <div className="notif-body">
                          <p className="notif-title">{entry.title}</p>
                          <p>{entry.text}</p>
                          <time>
                            {new Date(entry.createdAt).toLocaleDateString()}
                          </time>
                        </div>
                        <span className="notif-tag">News</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
                </>
              )}
            </div>
          </>,
          document.body,
        )}
      {/* Transaction notifications (add to cart, login, logout, ...) */}
      <Toasts />
    </header>
  );
}

export default Header;
