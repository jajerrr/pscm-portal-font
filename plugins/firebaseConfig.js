import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa_ZA5bVSIIoH73kd2LWGRQ_gxnfFrORE",
  authDomain: "pscm-metaverse.firebaseapp.com",
  projectId: "pscm-metaverse",
  storageBucket: "pscm-metaverse.appspot.com",
  messagingSenderId: "436793884328",
  appId: "1:436793884328:web:1062d561f039aa02620c9d",
  measurementId: "G-MCR0Z6Y5MF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
