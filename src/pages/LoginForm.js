import { useState, useContext } from "react";
import FormInput from "../components/formInput/FormInput";
import { StateContext } from "../context/StateContext";
import Loader from "react-loader-spinner";
import "./login.css";

function LoginForm() {
  const { login, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "email",
      placeholder: "Votre Email ",
      errorMessage: "Email invalide ",
      label: "Email",
      // pattern: "[0-9]{1,12}",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage: "Mot de Password incorrect",
      label: "Mot de Passe ",
      // pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    login(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-titleForm">Parc Auto</h1>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {
          //   loading
          loading ? (
            <button disabled={true} className="login-buttonForm">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "green",
                }}
              >
                <Loader type="Puff" color="green" height={20} width={30} />
                Traitement ...
              </div>
            </button>
          ) : (
            <button disabled={loading} className="login-buttonForm">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Se connecter
              </div>
            </button>
          )
        }
      </form>
    </div>
  );
}

export default LoginForm;
