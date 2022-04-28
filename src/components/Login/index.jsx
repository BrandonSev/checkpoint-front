import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/AppContext";

function Login() {
  const navigate = useNavigate();
  const { setUser, setIsBusiness } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, values, {
          withCredentials: true,
        })
        .then(({ data }) => {
          setUser(data.user || data.business);
          if (data.user) {
            setIsBusiness(false);
          } else {
            setIsBusiness(true);
          }
          navigate("/mon-compte");
          toast.success("Vous êtes maintenant connecté");
        });
    },
  });
  return (
    <div className="bg-light">
      <div className="container p-4 wrapper">
        <div className="w-100">
          <h1 className="text-center">Me connecter</h1>
          <form className="m-auto form-login">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div class="form-group py-4">
              <label for="exampleInputPassword1">Mot de passe</label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div class="form-group py-4">
              <button className="btn btn-success" onClick={formik.handleSubmit}>
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
