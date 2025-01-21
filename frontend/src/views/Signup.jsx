import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ContextData } from "../App";
import { usePost } from "../hooks/Requests";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(3).max(20).label("Name").required(),
  img: Joi.string().label("User Photo"),
  username: Joi.string().min(3).max(15).label("Username").required(),
  password: Joi.string().min(6).label("Password").required()
});

const Signup = () => {
  const { setUserData, setActive } = useContext(ContextData);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const { loading, data, error, postData } = usePost("/signup");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema)
  });

  const onSubmit = data => {
    // const credentials = {
    //   name: nameRef.current.value.trim(),
    //   img: userImgRef.current.value.trim(),
    //   username: usernameRef.current.value.trim(),
    //   password: passwordRef.current.value.trim()
    // };
    // postData(data);

    console.log(data);
  };

  useEffect(() => {
    setActive({});
  }, []);

  useEffect(() => {
    if (data?.success) {
      setUserData(data.response);
      localStorage.setItem("token", data.response.token);
      navigate("/");
    }
  }, [data]);

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>
        <label>
          Name:
          <input type="text" {...register("name")} />
        </label>
        {errors.name && <p>errors.name.message</p>}
        <label>
          User Photo (imgur/optional):
          <input type="text" {...register("img")} />
        </label>
        {errors.img && <p>errors.img.message</p>}
        <label>
          Username:
          <input type="text" {...register("username")} />
        </label>
        {errors.username && <p>errors.username.message</p>}
        <label>
          Password:
          <input type="password" {...register("password")} />
        </label>
        {errors.password && <p>errors.password.message</p>}
        <button>Signup</button>
        {error && <p>Something went wrong.</p>}
        <div className="option">
          <p>Already have an account? </p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
