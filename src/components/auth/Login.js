import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const invalidDialog = useRef();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid) {
          localStorage.setItem("app_user", res.token);
          history.push("/");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };
  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Email or password was not valid.</div>
        <button
          className="button--close"
          onClick={(e) => invalidDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <section className="sectionDiv">
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Anorak</h1>
          <h2>Please Sign In</h2>
          <fieldset>
            <label className="loginText" htmlFor="inputEmail"> Email Address </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form-control"
              defaultValue="test@test.com"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="loginText" htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="form-control"
              defaultValue="test"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset className="signInButton">
                        <div className="submitButton">
                        <button type="submit">
                            Sign in
                        </button>
                        </div>
                    </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};