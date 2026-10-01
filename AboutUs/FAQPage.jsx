import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./FAQPage.css";

const faqs = [
  {
    q: "What is Cafétcha?",
    a: "Cafétcha is a coffee and dine concept in Sto. Niño, Hagonoy, Bulacan where you can craft your perfect cup, your way — browse the menu, customize your drinks and food, order for delivery, and earn loyalty rewards.",
  },
  {
    q: "Do I need an account to order?",
    a: "Yes. As a guest you can browse the menu, view promos, try the 3D menu customization, and even build your own drink — but you need a free Cafétcha account to add to cart, place an order, earn loyalty cards, and write reviews.",
  },
  {
    q: "How do I create an account?",
    a: "Click Login / Sign Up in the header, choose Sign Up, then enter your First Name, Last Name, Email Address, Password, and Confirm Password. Tap Create Account and you're officially a customer.",
  },
  {
    q: "What can I do as a guest (without an account)?",
    a: "Guests can browse the full menu, promos, and new arrivals, read about us, see our contact information, view the 3D customization, and make their own customized item. Guests cannot add to cart, order, write reviews, or earn a loyalty card.",
  },
  {
    q: "How does customization work?",
    a: "For regular menu items, promos, and new arrivals with multiple options, you can pick your preferred size, flavor, toppings, and more. Other items can be built fully from scratch through the Customize cards — the choice is yours.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash on Delivery, GCash, and PayPal. Just choose your preferred method at checkout.",
  },
  {
    q: "How much is delivery, and which areas do you cover?",
    a: "We deliver to all 26 barangays of Hagonoy, Bulacan. Delivery is FREE for Santo Niño, and ranges from ₱10 to ₱30 depending on your barangay. See the full fee list on the Help page.",
  },
  {
    q: "How does the loyalty card work?",
    a: "Every ₱200 you spend on a completed order earns 1 stamp. Collect all 6 stamps, then claim your reward within 3 days and redeem one free coffee from the Coffee category within the next 3 days. Only one free coffee can be redeemed per 6/6 card.",
  },
  {
    q: "How do I track my order?",
    a: "After placing an order, check the notification bell in the header. Your order status updates there so you always know where your order is.",
  },
  {
    q: "Do I have to type my address every time?",
    a: "No. At checkout you can type your house number, zone, and choose your barangay. If you set your full address in your Profile, it will be pre-filled next time so you don't have to type it again.",
  },
  {
    q: "Can a guest write a review?",
    a: "Only signed-in customers can write reviews, and reviews become available after a completed order has been picked up.",
  },
  {
    q: "What are your store hours and location?",
    a: "We are located at Sto. Niño, Hagonoy, Bulacan and are open from 3 PM to 11 PM. Contact us at 0910 182 1406 or hellocafetcha@gmail.com.",
  },
  {
    q: "Can I reorder a previous order?",
    a: "Yes! We save your recent orders and recent customized items, so the next time you visit you can reorder them with just a few taps.",
  },
];

function FAQPage() {
  return (
    <>
      <Header />
      <main className="faq-page">
        <section className="faq-hero">
          <p className="faq-crumb">Home / FAQs</p>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <p>Answers to the most common questions about Cafétcha.</p>
        </section>

        <section className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>
                <HelpCircle size={16} />
                <span>{faq.q}</span>
                <ChevronDown size={16} className="faq-chevron" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className="faq-foot">
          Still need help? <a href="/help">Visit the Help Center</a> for
          step-by-step guides.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default FAQPage;
