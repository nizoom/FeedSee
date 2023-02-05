import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDoc,
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
    subscribers: ["tony18", "coolio"],
    name: "user18",
    email: email,
  });
};

interface subsListReturnObj {
  exists: boolean;
  subs: string[];
}

export const getSubsList = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return { exists: true, subs: [] } as subsListReturnObj;
  } else {
    // doc.data() will be undefined in this case
    console.log("user does not exist in firestore");
    return { exists: false, subs: [] } as subsListReturnObj;
  }
};

export const getSubscriptions = () => {};

export const addSubscription = () => {};
