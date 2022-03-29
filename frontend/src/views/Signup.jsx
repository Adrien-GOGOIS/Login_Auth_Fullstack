import axios from "axios";

import { useState } from "react";

function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userDateOfBirth, setUserDateOfBirth] = useState("");

  const onEmailChange = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();

    setUserPassword(e.target.value);
  };

  const onFirstNameChange = (e) => {
    e.preventDefault();

    setUserFirstName(e.target.value);
  };

  const onSurnameChange = (e) => {
    e.preventDefault();

    setUserSurname(e.target.value);
  };

  const onDateChange = (e) => {
    e.preventDefault();

    setUserDateOfBirth(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      userEmail,
      userPassword,
      userFirstName,
      userSurname,
      userDateOfBirth
    );
    axios
      .post("http://localhost:8000/signup", {
        email: userEmail,
        password: userPassword,
        firstName: userFirstName,
        surname: userSurname,
        dateOfBirth: userDateOfBirth,
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
