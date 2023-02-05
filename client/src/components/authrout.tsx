import { getAuth, onAuthStateChanged } from "firebase/auth";
import { config } from "../fbconfig";
import { initializeApp } from "firebase/app";
import { PropsWithChildren, useEffect } from "react";

// export interface AuthRouteProps extends PropsWithChildren {}

const AuthRoute: React.FC = () => {
  // const AuthRoute: React.FC<AuthRouteProps> = (props) => {
  //   const { children } = props;
  const auth = getAuth();
  //   const app = initializeApp(config.firebaseConfig);
  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      // history.push to main menu?
      console.log(user);
    } else {
      //  nothing because err handling should be elsewhere
    }
  });
  return <>{}</>;
};

export default AuthRoute;
