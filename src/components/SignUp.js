import { useRef } from "react";
import signup from "./SignUp.module.css"
import { auth } from '../firebase';
import { useState } from 'react';



export default function SignUp(props) {
    const [ errorMessage,errorMessageHandler ] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();
    const passRef = useRef();

    function submithandler(event) {
        event.preventDefault();
        const Email = emailRef.current.value;
        const Name = nameRef.current.value;
        const City = cityRef.current.value;
        const Password = passRef.current.value;
        
        const data = {
            Name ,
            Email,
            City,
            Password
        }
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            errorMessageHandler('⚠ '+err.message)
            console.log(err)
        })
        
        props.addSignUp(data);
        
    }

    return (
        <form onSubmit={submithandler}>
        <div className={signup.container}>
                <h4>Let's Sign Up really quick</h4>
                <input className={signup.field} type='text' required id='name' ref={nameRef} placeholder="Name" />
                <input className={signup.field} type='email' required id='email' ref={emailRef} placeholder="Email" /> 
                <input className={signup.field} type='text' required id='city' ref={cityRef} placeholder="City"/> 
                <input className={signup.field} type='password' required id='pass' ref={passRef} placeholder="Password" />             
            <button className={signup.field_btn}>Sign Up</button>  
            <p className={signup.error}>{errorMessage}</p>
        </div>
        </form>
    );
}
