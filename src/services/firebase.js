
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from  'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgLwBcHnd1TsxSuBdAN4iVO0JMqGqdIGM",
    authDomain: "messagerie-bd220.firebaseapp.com",
    projectId: "messagerie-bd220",
    storageBucket: "messagerie-bd220.appspot.com",
    messagingSenderId: "627670945338",
    appId: "1:627670945338:web:4eafc16e3f4c9dd3102f03",
    measurementId: "G-CJ6YKLEXJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    }).catch(error => console.log(error))
}