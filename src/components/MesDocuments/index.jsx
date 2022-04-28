import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import "moment/locale/fr";
import React, { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/AppContext";

function MesDocuments() {
  moment.locale("fr");
  const cvRef = useRef();
  const avatarRef = useRef();
  const { user, setUser, isBusiness } = useContext(AppContext);
  const cvFormik = useFormik({
    initialValues: {
      cv: "",
    },
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("file", values.cv);
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/api/users/${user.id}/cv`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then(({ data }) => {
          resetForm();
          cvRef.current.value = null;
          setUser(data.user);
          toast.success("Votre CV à bien été envoyé");
        })
        .catch((err) =>
          toast.error(
            err.response.data.message ||
              "Une erreur est survenue lors de modification de votre CV"
          )
        );
    },
  });
  const avatarFormik = useFormik({
    initialValues: {
      avatar: "",
    },
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("data", JSON.stringify({ firstname: user.firstname }));
      formData.append("assets", values.avatar);
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/api/users/${user.id}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then(({ data }) => {
          resetForm();
          avatarRef.current.value = null;
          setUser(data.user);
          toast.success("Votre avatar à bien été envoyé");
        })
        .catch((err) =>
          toast.error(
            err.response.data.message ||
              "Une erreur est survenue lors de modification de votre CV"
          )
        );
    },
  });
  return (
    <div className="mt-5">
      <h3>Mes documents</h3>
      <form action="">
        <div className="row">
          {!isBusiness && (
            <div className="col-12 col-md-6">
              <div className="form-group my-4">
                <label for="exampleInputEmail1">Mon CV</label>
                <input
                  class="form-control mt-2"
                  name="cv"
                  type="file"
                  onChange={(e) =>
                    cvFormik.setFieldValue("cv", e.target.files[0])
                  }
                  ref={cvRef}
                />
                <iframe
                  src={`${process.env.REACT_APP_API_URL}/images/${user.cv}`}
                  frameborder="0"
                  width={"100%"}
                  style={{ marginTop: "1rem" }}
                  title="Curriculum Vitae"
                  height={250}
                />
                <p className="m-0">
                  <small id="emailHelp" class="form-text text-muted">
                    Mise à jour le:{" "}
                    {moment(user.cv_created_at).format("DD MMMM YYYY à HH:mm")}
                  </small>
                </p>
                <button
                  className="btn btn-success mt-3"
                  onClick={cvFormik.handleSubmit}
                >
                  Valider
                </button>
              </div>
            </div>
          )}
          <div className="col-12 col-md-6">
            <div className="form-group my-4">
              <label for="exampleInputEmail1">Photo de profile</label>
              <input
                class="form-control mt-2"
                name="avatar"
                type="file"
                onChange={(e) =>
                  avatarFormik.setFieldValue("avatar", e.target.files[0])
                }
                ref={avatarRef}
              />
              <p className="m-0">
                <small id="emailHelp" class="form-text text-muted">
                  Mise à jour le:{" "}
                  {moment(user.avatar_created_at).format(
                    "DD MMMM YYYY à HH:mm"
                  )}
                </small>
              </p>
              <button
                className="btn btn-success mt-3"
                onClick={avatarFormik.handleSubmit}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MesDocuments;
