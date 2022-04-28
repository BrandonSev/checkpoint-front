import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/AppContext";

function Info() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      lastname: user.lastname,
      firstname: user.firstname,
      linkedin_url: user.linkedin_url,
      github_url: user.github_url,
      school_level: user.school_level,
      why_me: user.why_me,
      resume_project: user.resume_project,
      localisation: user.localisation,
      email: user.email,
      age: user.age,
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      axios
        .put(`${process.env.REACT_APP_API_URL}/api/users/${user.id}`, values, {
          withCredentials: true,
        })
        .then(({ data }) => {
          setUser(data.user || data.business);
          navigate("/mon-compte");
          toast.success("Votre compte à bien été modifié");
        })
        .catch((err) =>
          toast.error(
            err.response.data.message ||
              "Une erreur est survenue lors de la connexion"
          )
        );
    },
  });
  return (
    <div className="mt-5">
      <h3>Mes informations</h3>
      <form>
        <div className="row">
          <div className="col-6">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Nom</label>
              <input
                type="lastname"
                class="form-control"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="form-group py-4">
              <label for="exampleInputPassword1">Prénom</label>
              <input
                type="firstname"
                name="firstname"
                class="form-control"
                value={formik.values.firstname}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Localisation</label>
              <input
                type="localisation"
                class="form-control"
                name="localisation"
                value={formik.values.localisation}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
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
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Age</label>
              <input
                type="age"
                class="form-control"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Niveau d'études</label>
              <input
                type="school_level"
                class="form-control"
                name="school_level"
                value={formik.values.school_level}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Github</label>
              <input
                type="github_url"
                class="form-control"
                name="github_url"
                value={formik.values.github_url}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">LinkedIn</label>
              <input
                type="linkedin_url"
                class="form-control"
                name="linkedin_url"
                value={formik.values.linkedin_url}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Pourquoi moi?</label>
              <textarea
                type="why_me"
                class="form-control"
                name="why_me"
                value={formik.values.why_me}
                onChange={formik.handleChange}
                rows={5}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">
                Resumer de mon dernier projet
              </label>
              <textarea
                type="resume_project"
                class="form-control"
                name="resume_project"
                value={formik.values.resume_project}
                rows={5}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div class="form-group py-4">
          <button className="btn btn-success" onClick={formik.handleSubmit}>
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default Info;
