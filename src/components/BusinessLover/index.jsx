import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";

function BusinessLover() {
  const [likes, setLikes] = useState([]);
  const { user, isBusiness } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/${
            isBusiness ? "business" : "users"
          }/${user.id}/likes`
        )
        .then(({ data }) => {
          setLikes(data);
        })
        .catch((err) => console.log(err));
    })();
  }, [isBusiness, user.id]);
  return (
    <div className="mt-5">
      <h3>{!isBusiness ? "Qui à aimé mon profile" : "Mes candidats"}</h3>
      <div className="mt-4">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Avis</th>
              <th scope="col">{isBusiness ? "Envoyé le" : "Reçu le"}</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {likes.length ? (
              likes.map((like) => (
                <tr>
                  <td>
                    {like.business_name || like.firstname + " " + like.lastname}
                  </td>
                  <td>
                    {like.type === "like" && (
                      <button>
                        <AiFillHeart size={25} color={"red"} />
                      </button>
                    )}
                    {like.type === "encourage" && (
                      <button>
                        <FaHandHoldingHeart size={22} color={"red"} />
                      </button>
                    )}
                  </td>
                  <td>
                    {moment(like.created_at).format("DD MMMM YYYY à HH:mm")}
                  </td>
                  <td>
                    <div className="d-flex">
                      {like.type === "like" ? (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
                            like.business_email || like.email
                          }`}
                          target="_blank"
                          className="btn btn-success"
                          rel="noreferrer"
                        >
                          Contacter
                        </a>
                      ) : (
                        <p>-</p>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr style={{ textAlign: "center" }}>
                <td colSpan={4}>Aucun avis n'a été laissé pour le moment</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BusinessLover;
