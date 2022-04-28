import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/AppContext";

function InfoBusiness() {
  const { user, setUser } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      email: user.email,
      name: user.name,
      localisation: user.localisation,
      siret: user.siret,
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("data", JSON.stringify(values));
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/api/business/${user.id}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then(({ data }) => {
          setUser(data.user || data.business);
          toast.success("Votre compte à bien été modifié");
        })
        .catch((err) =>
          toast.error(
            err.response.data.message ||
              "Une erreur est survenue lors de la modification de votre compte"
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
              <label for="exampleInputEmail1">Nom entreprise</label>
              <input
                type="name"
                class="form-control"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="form-group py-4">
              <label for="exampleInputPassword1">Localisation</label>
              <input
                type="text"
                name="firstname"
                class="form-control"
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
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Siret</label>
              <input
                type="text"
                class="form-control"
                name="siret"
                value={formik.values.siret}
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

export default InfoBusiness;
