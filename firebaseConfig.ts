import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKnDjlemhzSUZnQAsFGqMb1EKsWMIAmI8",
  projectId: "pollexa-46eaf",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebaseConfig, app, db };
