import signpage from "./SigningPage.module.css"
import Header from "../components/Header";
import Signing from "../components/Signingbutton";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Login from "../components/LogIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import User from '../components/User';
import firebase from 'firebase';

export default function HomePage(){
    const [isSignUpOpen , setSignUp] = useState(false);
    const [isLogInOpen , setLogIn] = useState(false);
    const history = useHistory();
    
    function openSignUp(){
        setSignUp(true)
        setLogIn(false)
    };
    function openLogIn(){
        setLogIn(true)
        setSignUp(false)
    };
    function AddSignUpData(data){
        console.log(data)
        fetch(
            "https://alles-179b0-default-rtdb.firebaseio.com/SignUpData.json",
            {
                method : "POST",
                body : JSON.stringify(data)
            }
        ).then(()=>{
            history.replace('/')
        });
        setLogIn(false)
        setSignUp(false)
    };

        var getUser = firebase.auth().currentUser;
        
        if (getUser) {
          // User is signed in.
          var userName = getUser.email;
        } else {
          // No user is signed in.
        }
    
    return(
        <div>
            <Header/>
            <h2 id="btn" className={signpage.alles_logo}>Alles</h2>
            <Signing/>
            <section className={signpage.btn_center}>
            <button onClick={openSignUp} className={signpage.login_btn}>Sign Up</button>
            <button onClick={openLogIn} className={signpage.signup_btn}>Log In</button>
            </section>
            { getUser? <User user={userName}/>:null}
            { isSignUpOpen ? <SignUp addSignUp={AddSignUpData}/>:null}
            { isLogInOpen ? <Login/>:null}
            <About/>
        </div>
        
    );
}
