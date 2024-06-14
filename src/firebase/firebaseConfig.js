import { initializeApp } from "firebase/app";
import { limit } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { MdOutlineJoinLeft } from "react-icons/md";

const firebaseConfig = {
  apiKey: "AIzaSyAULrZXSnD9E6oikArWeHsGCOk_jmL9FFA",
  authDomain: "mystore-9f239.firebaseapp.com",
  projectId: "mystore-9f239",
  storageBucket: "mystore-9f239.appspot.com",
  messagingSenderId: "762264489155",
  appId: "1:762264489155:web:60eeb45b089607f926e676"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)