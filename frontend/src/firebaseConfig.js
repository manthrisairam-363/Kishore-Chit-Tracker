// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzOSvx8Cmr8Ai-CTYP2qRlO8KDZdfvExg",
  authDomain: "kishore-kumar-c287d.firebaseapp.com",
  projectId: "kishore-kumar-c287d",
  storageBucket: "kishore-kumar-c287d.firebasestorage.app",
  messagingSenderId: "841387030255",
  appId: "1:841387030255:web:b59b3784c2bfbc0e640d1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.log("Firestore persistence unavailable - multiple tabs open");
  } else if (err.code === "unimplemented") {
    console.log("Firestore persistence not supported in this browser");
  }
});
