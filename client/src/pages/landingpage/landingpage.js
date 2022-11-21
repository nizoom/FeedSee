import React from "react";
import "../css/landingpage.css";
import Hero from "../../media/hero.png";
const LandingPage = () => {
  return (
    <div className="landingpage-wrapper">
      <header className="landingpage-header">
        <h1 className="app-title">FeedSee</h1>
        <h2 className="sub-header">Enter a Twitter user, see what they see</h2>
        <img
          className="hero-img"
          src={Hero}
          alt="The Twitter bird mascot looking out onto square boxes representing tweets"
          title="The Twitter bird mascot looking out onto square boxes representing tweets"
        />
      </header>
      <section className="call-to-action-section">
        <h3 className="call-to-action">
          See what's inspiring your favorite public figures
        </h3>
        <nav className="auth-btns-wrapper">
          <button type="button" className="auth-btn">
            Log in
          </button>
          <button type="button" className="auth-btn">
            Sign up
          </button>
          <button type="button" className="auth-btn">
            Sign in with Google
          </button>
        </nav>
      </section>
    </div>
  );
};

export default LandingPage;
