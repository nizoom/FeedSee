import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/authpages.css";
import OverlappingCards from "../../media/overlappingcards.png";

const AuthPages = (props: {
  history: { location: { state: { loginOrSignup: string } } };
}) => {
  const [signupForm, setSignupForm] = useState("");
  const history = useHistory();

  useEffect(() => {
    const userHasRefreshed = props.history.location.state;
    if (userHasRefreshed) {
      const userDecision = props.history.location.state.loginOrSignup;
      setSignupForm(userDecision);
    } else {
      // go back to landing page on refresh
      history.push("/");
    }
  }, [props]);

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="auth-page-wrapper">
      <header className="landingpage-header">
        <h1 className="app-title">FeedSee</h1>
      </header>
      <div className="top-of-formbox">
        <img src={OverlappingCards} className="overlapping-cards" />
        <h1 className="auth-form-title">{signupForm}</h1>
      </div>

      <section>
        {signupForm === "Signup" ? (
          <div className="auth-form-box">
            <form>
              <div className="input-div">
                <label>Username</label>
                <input type="text" className="auth-input" autoFocus />
              </div>
              <div className="input-div">
                <label>Password</label>
                <input type="password" className="auth-input" />
              </div>
              <div className="input-div">
                <label>Confirm Password</label>
                <input type="password" className="auth-input" />
              </div>

              <button type="submit" className="auth-form-btn">
                <p>Sign Up </p>
              </button>
              <button
                type="button"
                className="auth-form-btn go-back"
                onClick={goBack}
              >
                <p>Go back </p>
              </button>
            </form>
          </div>
        ) : (
          <div className="auth-form-box">
            <form>
              <div className="input-div">
                <label>Username</label>
                <input type="text" className="auth-input" />
              </div>
              <div className="input-div">
                <label>Password</label>
                <input type="password" className="auth-input" />
              </div>
              <button type="submit" className="auth-form-btn">
                <p> Login</p>
              </button>
              <button
                type="submit"
                className="auth-form-btn go-back"
                onClick={goBack}
              >
                <p>Go back </p>
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default AuthPages;
