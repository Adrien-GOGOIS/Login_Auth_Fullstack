import axios from "axios";

import { useState } from "react";

function Signup() {
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

  const onFirstNameChange = (e) => {
    setUser({ firstName: e.target.value });
  };

  const onSurnameChange = (e) => {
    setUser({ surname: e.target.value });
  };

  const onDateChange = (e) => {
    setUser({ date: e.target.value });
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
      <h1>SIGNUP</h1>
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
        <label htmlFor="confirmPassword">Confirmez votre mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        <label htmlFor="firstName">Entrez votre nom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          onChange={onFirstNameChange}
        />
        <label htmlFor="surname">Entrez votre pseudo</label>
        <input
          type="text"
          id="surname"
          name="surname"
          required
          onChange={onSurnameChange}
        />
        <label htmlFor="dateOfBirth">Entrez votre date de naissance</label>
        <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          required
          onChange={onDateChange}
        />
        <button type="submit" onClick={(e) => onSubmit(e)}>
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default Signup;
