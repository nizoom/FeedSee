import React from "react";
import "../css/landingpage.css";
import Hero from "../../media/hero.png";
import { useHistory } from "react-router-dom";
const LandingPage = () => {
  console.log("rendering");
  const history = useHistory();
  const linkToAuth = (loginOrSignup: string) => {
    console.log("clicked");
    history.push({
      pathname: "/auth",
      state: { loginOrSignup: loginOrSignup },
    });
  };
  return (
    <div className="landingpage-wrapper">
      <header className="landingpage-header">
        <h1 className="app-title">FeedSee</h1>
        <h2 className="sub-header">
          <span>Enter a Twitter user,</span> <span>see what they see</span>
        </h2>
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
            <p className="btn-name" onClick={(event) => linkToAuth("Login")}>
              Log in
            </p>
          </button>
          <button type="button" className="auth-btn">
            <p className="btn-name" onClick={(event) => linkToAuth("Signup")}>
              Sign up
            </p>
          </button>
          <button type="button" className="auth-btn">
            <p className="btn-name">Sign in with Google</p>
          </button>
        </nav>
      </section>
    </div>
  );
};

export default LandingPage;
