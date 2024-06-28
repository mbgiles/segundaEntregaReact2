import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCecxaWFeUK51tDTf0ir2TsL12LcOAetBE",
  authDomain: "tienda-quiero-mi-mate.firebaseapp.com",
  projectId: "tienda-quiero-mi-mate",
  storageBucket: "tienda-quiero-mi-mate.appspot.com",
  messagingSenderId: "27317837577",
  appId: "1:27317837577:web:d2f56685a5f8e993687dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);