import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASEN4mBMIgf_qIlMl1lfFIRjIUaM1CbIM",
  authDomain: "react-board-crud.firebaseapp.com",
  projectId: "react-board-crud",
  storageBucket: "react-board-crud.appspot.com",
  messagingSenderId: "607513667032",
  appId: "1:607513667032:web:45b359dd7183fab1e17ead",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
