import React, { useEffect } from "react";
import "./css/landingpage.css";
import Hero from "../media/hero.png";
import { useHistory } from "react-router-dom";
import { Center, Image } from "@chakra-ui/react";
import { loginWithGoogle } from "../firebasefuncs";
import { onAuthStateChanged, getAuth } from "firebase/auth";
const auth = getAuth();
const LandingPage = () => {
  const history = useHistory();
  const linkToAuth = (loginOrSignup: string) => {
    history.push({
      pathname: "/auth",
      state: { loginOrSignup: loginOrSignup },
    });
  };
  const initSigninWithGoogle = async () => {
    loginWithGoogle();
  };

  useEffect(() => {
    console.log("on landing page");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        history.push({
          pathname: "/mainmenu",
        });
      }
    });
  });

  return (
    <div className="landingpage-wrapper">
      <header className="landingpage-header">
        <h1 className="app-title">FeedSee</h1>
        <h2 className="sub-header">
          <span>Enter a Twitter user,</span> <span>see what they see</span>
        </h2>
        <Center>
          <Image
            className="hero-img"
            src={Hero}
            alt="The Twitter bird mascot looking out onto square boxes representing tweets"
            title="The Twitter bird mascot looking out onto square boxes representing tweets"
          />
        </Center>
      </header>
      <section className="call-to-action-section">
        <h3 className="call-to-action">
          See what's inspiring your favorite public figures
        </h3>
        <nav className="auth-btns-wrapper">
          <button type="button" className="auth-btn">
            <p className="btn-name" onClick={() => linkToAuth("Login")}>
              Log in
            </p>
          </button>
          <button type="button" className="auth-btn">
            <p className="btn-name" onClick={() => linkToAuth("Signup")}>
              Sign up
            </p>
          </button>
          <button
            type="button"
            className="auth-btn"
            onClick={initSigninWithGoogle}
          >
            <p className="btn-name">Sign in with Google</p>
          </button>
        </nav>
      </section>
    </div>
  );
};

export default LandingPage;
