import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_naR74DzO-Mb6pDJOsPA8b3P1O9pv_bI",
  authDomain: "netflix-clone-7f3ed.firebaseapp.com",
  projectId: "netflix-clone-7f3ed",
  storageBucket: "netflix-clone-7f3ed.appspot.com",
  messagingSenderId: "181979787228",
  appId: "1:181979787228:web:09d3a08e08b6d2631de919"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
