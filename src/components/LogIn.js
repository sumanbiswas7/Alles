import { useRef } from "react";
import login from "./LogIn.module.css";
import { auth } from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [errorMessage, errorMessageHandler] = useState("");
  const emailRef = useRef();
  const passRef = useRef();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        errorMessageHandler("⚠ " + err.message);
        console.log(err.message);
      })
      .then(history.replace("/"));
  };

  function submithandler(event) {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passValue = passRef.current.value;

    const data = [
      {
        emailValue,
        passValue,
      },
    ];
    console.log(data);
  }

  return (
    <form onSubmit={submithandler}>
      <div className={login.container}>
        <h4>Login with your email & pass</h4>
        <input
          className={login.field}
          type="email"
          required
          id="email"
          ref={emailRef}
          placeholder="Email"
        />
        <input
          className={login.field}
          type="password"
          required
          id="pass"
          ref={passRef}
          placeholder="Password"
        />
        <button onClick={signIn} className={login.field_btn}>
          Log In
        </button>
        <p className={login.error}>{errorMessage}</p>
      </div>
    </form>
  );
}
