import axios from "axios";

import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';

function Signup() {

    const history = useHistory();
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
          history.push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
  };

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
    </div>
  );
}

export default Signup;
