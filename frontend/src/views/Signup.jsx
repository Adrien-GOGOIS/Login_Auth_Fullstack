import axios from "axios";

import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  /*const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userDateOfBirth, setUserDateOfBirth] = useState("");*/

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data.email)
    axios
        .post("http://localhost:8000/signup", {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          surname: data.surname,
          dateOfBirth: data.dateOfBirth,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  /*const onEmailChange = (e) => {
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
  };*/

  /*const onSubmit = (e) => {
    e.preventDefault();
    console.log();
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
  };*/

  return (
    <div>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <input {...register("email", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input {...register("password", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input {...register("confirmedPassword", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input {...register("firstName", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input {...register("surname", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input {...register("dateOfBirth", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      {/*<form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label htmlFor="email">Entrez votre Email</label>
        <input
            {...register("email", { required: true, maxLength: 155})}
          type="text"
          id="email"
          placeholder="Email"
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
      </form>*/}
    </div>
  );
}

export default Signup;
