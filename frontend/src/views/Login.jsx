import { useState } from "react";

const axios = require("axios");

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    surname: "",
    dateOfBirth: "",
  });

  const onEmailChange = (e) => {
    setUser({ email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setUser({ password: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/signup", {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        surname: user.surname,
        dateOfBirth: user.dateOfBirth,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label htmlFor="email">Entrez votre Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
          onChange={onEmailChange}
        />
        <label htmlFor="password">Entrez un mot de passe de 8 caractères</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={onPasswordChange}
        />
        <button type="submit" onClick={(e) => onSubmit(e)}>
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default Login;
