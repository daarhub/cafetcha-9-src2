import { useState } from "react";
import Header from "../HomepageGuest/Header";
import Footer from "../HomepageGuest/Footer";
import "./OurStoryPage.css";

const photoColumns = [
  {
    id: "column-1",
    tiles: [
      {
        id: "our-story",
        image: "/images/our-story.png",
        title: "Our Story",
        text: "Cafétcha was created to bring together great food, refreshing beverages, and a welcoming café atmosphere. We aim to provide guests with a place where they can relax, connect, and enjoy their favorite treats. Our café combines a traditional café experience with a modern touch of technology.",
      },
      {
        id: "what-makes-us-unique",
        image: "/images/what-makes-us-unique.png",
        title: "What Makes Us Unique",
        text: "Cafétcha stands out by combining technology with a personalized café experience. Customers can use a Digital Loyalty Card to collect points and earn exclusive rewards with every purchase. They can also customize their coffee in 3D, allowing them to personalize their drink and visualize their creation before ordering.",
      },
    ],
  },
  {
    id: "column-2",
    tiles: [
      {
        id: "center",
        image: "/images/center.png",
        title: null,
        text: null,
      },
      {
        id: "our-ambiance",
        image: "/images/our-ambiance.png",
        title: "Our Ambiance",
        text: "Cafétcha offers a cozy and inviting atmosphere where guests can unwind and enjoy their time. Our space is designed to be comfortable for casual conversations, studying, or simply relaxing. We create an environment where every visit feels warm and enjoyable.",
      },
    ],
  },
  {
    id: "column-3",
    tiles: [
      {
        id: "our-mission",
        image: "/images/our-mission.png",
        title: "Our Mission",
        text: "Our mission is to provide quality food and beverages while making every guest feel welcome. We strive to make the café experience convenient, enjoyable, and memorable. Through good service and innovation, we aim to exceed our guests' expectations.",
      },
      {
        id: "our-vision",
        image: "/images/our-vision.png",
        title: "Our Vision",
        text: "We envision Cafétcha as a modern café that people can enjoy for both relaxation and connection. We want to create an experience that combines comfort, quality, and technology. Our goal is to become a café that guests can return to and feel at home.",
      },
    ],
  },
];

const techFeatures = [
  {
    id: "loyalty-card",
    image: "/images/loyalty-card-icon.png",
    title: "Digital Loyalty Card",
    description:
      "Collect points with every purchase and unlock exclusive rewards — all tracked automatically in your account, no punch card needed.",
  },
  {
    id: "3d-customize",
    image: "/images/3d-customize-icon.png",
    title: "3D Drink Customization",
    description:
      "Customize your order and see it come together in 3D before you order — pick your cup, toppings, drizzle, and watch it build in real time.",
  },
  {
    id: "smart-preorder",
    image: "/images/smart-preorder-icon.png",
    title: "Smart Pre-Order Suggestions",
    description:
      "Get personalized suggestions based on your previous orders, making it easier to discover your favorites and quickly pre-order what you love.",
  },
];

const teamMembers = [
  {
    id: "member-1",
    formalImage: "/images/PROFILE/darwin-formal.png",
    baristaImage: "/images/PROFILE/darwin-admin.jpg",
    name: "Darwin C. Mateo",
    devRole: "Full-Stack Developer",
    opsRole: "Admin",
  },
  {
    id: "member-2",
    formalImage: "/images/PROFILE/marcel-formal.png",
    baristaImage: "/images/PROFILE/marcel-staff.jpg",
    name: "Marcel Grachzelli T. Santos",
    devRole: "Full-Stack Developer",
    opsRole: "Staff",
  },
  {
    id: "member-3",
    formalImage: "/images/PROFILE/erica-formal.jpg",
    baristaImage: "/images/PROFILE/erica-staff.jpg",
    name: "Erica P. Villalon",
    devRole: "UI/UX Design",
    opsRole: "Staff",
  },
  {
    id: "member-4",
    formalImage: "/images/PROFILE/raizen-formal.jpg",
    baristaImage: "/images/PROFILE/raizen-delivery-rider.jpg",
    name: "Raizen Lheluer P. Perez",
    devRole: "Front-End Developer",
    opsRole: "Delivery Rider",
  },
  {
    id: "member-5",
    formalImage: "/images/PROFILE/john-formal.jpg",
    baristaImage: "/images/PROFILE/john-barista.jpg",
    name: "John Roy S. Baluyot",
    devRole: "Database Developer",
    opsRole: "Barista",
  },
  {
    id: "member-6",
    formalImage: "/images/PROFILE/jemelyn-formal.jpg",
    baristaImage: "/images/PROFILE/jemelyn-waitress.jpg",
    name: "Jemelyn C. Eligio",
    devRole: "Database Developer",
    opsRole: "Waitress",
  },
];

function PhotoTile({ photo }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasCaption = Boolean(photo.title);

  return (
    <div
      className={`photo-tile photo-tile-${photo.id} ${
        hasCaption ? "photo-tile-has-caption" : ""
      } ${isHovered ? "is-hovered" : ""}`}
      onMouseEnter={() => hasCaption && setIsHovered(true)}
      onMouseLeave={() => hasCaption && setIsHovered(false)}
    >
      <img src={photo.image} alt={photo.title || "Cafétcha"} className="photo-tile-image" />

      {hasCaption && (
        <div className="photo-tile-overlay">
          <h3 className="photo-tile-title">{photo.title}</h3>
          <p className="photo-tile-text">{photo.text}</p>
        </div>
      )}
    </div>
  );
}

function TaglineRow({ variant }) {
  return (
    <div className={`tagline-row tagline-row--${variant}`}>
      <div>
        <h2 className="tagline-row-heading">
          More Than
          <br />
          Just a Café
        </h2>
        <div className="tagline-row-underline" />
      </div>
      <img src="/images/logo.png" alt="Cafétcha logo" className="tagline-row-logo" />
    </div>
  );
}

function StoryTechCard({ feature }) {
  return (
    <div className="story-tech-card">
      <div className="story-tech-icon-wrap">
        <img src={feature.image} alt="" className="story-tech-icon" aria-hidden="true" />
      </div>
      <h3 className="story-tech-card-title">{feature.title}</h3>
      <p className="story-tech-card-description">{feature.description}</p>
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-card-flip">
        <div className="team-card-face team-card-face--front">
          <div className="team-card-photo-wrap">
            <img src={member.formalImage} alt={member.name} className="team-card-photo" />
          </div>
          <h3 className="team-card-name">{member.name}</h3>
          <p className="team-card-role">{member.devRole}</p>
        </div>

        <div className="team-card-face team-card-face--back">
          <div className="team-card-photo-wrap">
            <img src={member.baristaImage} alt={member.name} className="team-card-photo" />
          </div>
          <h3 className="team-card-name">{member.name}</h3>
          <p className="team-card-role team-card-role--ops">{member.opsRole}</p>
          <p className="team-card-ops-label">Café Operations</p>
        </div>
      </div>
    </div>
  );
}

function OurStoryPage() {
  return (
    <>
      <Header />
      <main aria-label="Our Story page">
        {/* Hero */}
        <section className="our-story-hero">
          <p className="our-story-hero-breadcrumb">Home / About Us</p>
          <h1 className="our-story-hero-title">ABOUT CAFÉTCHA</h1>
          <p className="our-story-hero-subtitle">
            Get to know what brings us together — our story, our space, and what we're
            working toward.
          </p>
          <p className="our-story-hero-hint">Hover over each photo to view information.</p>
        </section>

        {/* Photo grid */}
        <section className="photo-section">
          <div className="photo-grid">
            {photoColumns.map((column, index) => (
              <div key={column.id} className={`photo-column photo-column-${index + 1}`}>
                {column.tiles.map((photo) => (
                  <PhotoTile key={photo.id} photo={photo} />
                ))}

                {/* Tagline lives inside column 1 on desktop/tablet,
                    filling the leftover space under the shorter column */}
                {index === 0 && <TaglineRow variant="inline" />}
              </div>
            ))}
          </div>

          {/* Tagline shown instead on mobile, after the full stacked grid */}
          <TaglineRow variant="stacked" />
        </section>

        {/* Extra tech features */}
        <section className="story-tech-section">
          <p className="story-tech-eyebrow">THE CAFÉTCHA DIFFERENCE</p>
          <h2 className="story-tech-title">BUILT WITH A LITTLE EXTRA TECH</h2>
          <p className="story-tech-subtitle">
            Three features guests love most — designed to make every visit a little more
            personal.
          </p>

          <div className="story-tech-grid">
            {techFeatures.map((feature) => (
              <StoryTechCard key={feature.id} feature={feature} />
            ))}
          </div>
        </section>

        {/* Development team */}
        <section className="team-section">
          <p className="team-eyebrow">THE PEOPLE BEHIND CAFÉTCHA</p>
          <h2 className="team-title">MEET THE DEVELOPMENT TEAM</h2>
          <p className="team-subtitle">
            The team that designed, built, and brewed up the Cafétcha experience.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default OurStoryPage;