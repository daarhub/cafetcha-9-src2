import { Send } from "lucide-react";
import { useState } from "react";
import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import { saveContactMessage, useCustomerStore } from "../Customer/customerStore";
import { notify } from "../Customer/toastStore";
import "./ContactPage.css";

// Subject/concern options for the dropdown — the message lands in the
// contact inbox (cafetcha-contact-messages) for the admin side to answer.
const SUBJECTS = [
  "Order Concern",
  "Payment Concern",
  "Delivery Concern",
  "Complaint",
  "Suggestion",
  "Be a supplier",
  "Business Partnership",
  "OJT / Internship",
  "Event / Catering Inquiry",
  "Student's Capstone",
];

// /contact — open to guests and customers alike. Logged-in visitors get
// their name and email pre-filled (still editable), everyone else starts
// from a blank form.
function ContactPage() {
  const { customer } = useCustomerStore();
  const [form, setForm] = useState({
    firstName: customer?.firstName || "",
    lastName: customer?.lastName || "",
    email: customer?.email || "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!form.firstName.trim() || !form.lastName.trim()) {
      return setError("Please enter your first and last name.");
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      return setError("Please enter a valid email address.");
    }
    if (form.phone.replace(/\D/g, "").length !== 11) {
      return setError("Phone number must be exactly 11 digits.");
    }
    if (!form.subject) {
      return setError("Please choose a subject/concern.");
    }
    if (form.message.trim().length < 5) {
      return setError("Please write your message.");
    }
    saveContactMessage(form);
    notify("Message sent — we'll get back to you soon!");
    setSent(true);
  };

  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="contact-crumb">Home / Contact Us</p>
          <h1>CONTACT US</h1>
          <p>
            Questions, concerns, or ideas? Send us a message — we read
            everything.
          </p>
        </section>

        <section className="contact-body">
          {sent ? (
            <div className="contact-card contact-sent">
              <Send size={44} strokeWidth={1.5} />
              <h2>Message sent!</h2>
              <p>
                Thanks, {form.firstName.trim()} — our team will get back to you
                at {form.email.trim()}.
              </p>
              <button
                type="button"
                className="contact-submit"
                onClick={() => {
                  setForm({
                    firstName: customer?.firstName || "",
                    lastName: customer?.lastName || "",
                    email: customer?.email || "",
                    phone: "",
                    subject: "",
                    message: "",
                  });
                  setSent(false);
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-card" onSubmit={handleSubmit} noValidate>
              <h2>Send us a message</h2>
              <div className="contact-grid-2">
                <label>
                  First Name
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(event) => update("firstName", event.target.value)}
                    placeholder="Your first name"
                  />
                </label>
                <label>
                  Last Name
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(event) => update("lastName", event.target.value)}
                    placeholder="Your last name"
                  />
                </label>
              </div>
              <div className="contact-grid-2">
                <label>
                  Email Address
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={11}
                    value={form.phone}
                    onChange={(event) =>
                      update(
                        "phone",
                        event.target.value.replace(/\D/g, "").slice(0, 11),
                      )
                    }
                    placeholder="09XXXXXXXXX"
                  />
                </label>
              </div>
              <label>
                Subject / Concern
                <select
                  value={form.subject}
                  onChange={(event) => update("subject", event.target.value)}
                >
                  <option value="">Choose a subject…</option>
                  {SUBJECTS.map((entry) => (
                    <option key={entry} value={entry}>
                      {entry}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Tell us how we can help…"
                />
              </label>
              {error && <p className="contact-error">{error}</p>}
              <button type="submit" className="contact-submit">
                <Send size={16} /> Send Message
              </button>
              <p className="contact-note">
                Messages go straight to the Cafétcha team — typically answered
                within 1–2 business days.
              </p>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;