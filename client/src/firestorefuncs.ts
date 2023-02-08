import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDoc,
  arrayUnion,
  updateDoc,
} from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { config } from "./fbconfig";

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db, "users");
export const createUserInFirestore = async (
  email: string | null,
  uid: string
) => {
  // if uid does not exist in db then create
  const result = await setDoc(doc(usersRef, uid), {
    subscriptions: [],
    name: "user18",
    email: email,
  });
};

interface subsListReturnObj {
  userExists: boolean;
  subs: string[];
}

export const getSubsList = async (uid: string | undefined) => {
  if (!uid) {
    console.log("Logged in user not found");
    throw new Error("Logged in user not found");
  }
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return {
      userExists: true,
      subs: [docSnap.data().subscriptions],
    } as subsListReturnObj;
  } else {
    // doc.data() will be undefined in this case
    console.log("user does not exist in firestore");
    return { userExists: false, subs: [] } as subsListReturnObj;
  }
};

export const addSubscription = (uid: string | undefined, newSub: string) => {
  if (!uid) {
    console.log("Logged in user not found");
    throw new Error("Logged in user not found");
  }
  const userRef = doc(db, "users", uid);
  updateDoc(userRef, { subscriptions: arrayUnion(newSub) });
};
