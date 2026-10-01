import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./LoginModal.css";

// Shared guest gate: anything that needs an account opens this small modal
// first; its "Login / Sign Up" button then opens the full AuthModal.
function LoginModal({ onClose, onLogin }) {
  // Close on Escape and lock page scrolling while the modal is open.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Rendered through a portal to <body> so the backdrop always covers the
  // whole viewport and stays centered, even when opened from inside the
  // header (its backdrop-filter would otherwise trap fixed positioning).
  return createPortal(
    <div className="login-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="login-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h2 id="login-modal-title">Login required</h2>
        <p>
          Please log in or create an account to add items and view your cart.
        </p>
        <button
          className="login-modal-action"
          onClick={() => (onLogin ? onLogin() : onClose())}
        >
          Login / Sign Up
        </button>
      </section>
    </div>,
    document.body,
  );
}

export default LoginModal;