import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/firebase.config.js";

const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;
