import React from "react";

function Login() {
  return (
    <div className="bg-light">
      <div className="container p-4">
        <div className="w-100">
          <h1>Me connecter</h1>
          <form>
            <div class="form-group my-4">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group py-4">
              <label for="exampleInputPassword1">Mot de passe</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group py-4">
              <button className="btn btn-success">Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
