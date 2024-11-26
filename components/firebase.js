import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES",
  authDomain: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES",
  projectId: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES",
  storageBucket: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES",
  messagingSenderId: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES",
  appId: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES",
  measurementId: "API INFORMATION IS REMOVED DUE TO SECURITY ISUUES"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only in the browser environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics };
