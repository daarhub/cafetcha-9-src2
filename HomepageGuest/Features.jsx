import React from "react";
import { Coffee, Gift, Utensils, WandSparkles } from "lucide-react";
import "./Features.css";

const features = [
  {
    id: 1,
    icon: Coffee,
    title: "Freshly Made",
    description: "Made fresh to order with quality ingredients.",
  },
  {
    id: 2,
    icon: WandSparkles,
    title: "Made Your Way",
    description: "Customize your drink and create something uniquely yours.",
  },
  {
    id: 3,
    icon: Utensils,
    title: "Order With Ease",
    description:
      "Browse, customize, and order your favorites with just a few clicks.",
  },
  {
    id: 4,
    icon: Gift,
    title: "More Ways to Save",
    description: "Enjoy promos, rewards, and special offers.",
  },
];

function Features() {
  return (
    <section className="features" id="features">

      <div className="features-heading">

          <div className="features-title-row">
            <span className="heading-line"></span>

            <h2>Why Cafétcha?</h2>

            <span className="heading-line"></span>
          </div>

          <p>Freshly made your way and designed to make every order better.</p>
      </div>

      <div className="features-content">
        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.id}>
                <div className="feature-icon">
                  <Icon size={34} strokeWidth={1.6} />
                </div>

                <div className="feature-card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
