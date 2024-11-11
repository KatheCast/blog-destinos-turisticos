import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const valid_users = [
  {
    email: "gewurog@mailinator.com",
    password: "Pa$$w0rd!",
    id: 3,
  },
  {
    email: "qatygecuno@mailinator.com",
    password: "Pa$$w0rd!",
    id: 5,
  },
];

export const IniciarSesion = () => {
  const urlApi = "https://67263d98302d03037e6cdf7e.mockapi.io/api";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/listaDePosts");
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = valid_users.find(
      (user) => user.email === email && user.password === password
    );
    const userForApi = await fetch(`${urlApi}/users/${user.id}`);
    localStorage.setItem("user", JSON.stringify(await userForApi.json()));
    navigate("/nuevoPost");
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          onChange={onChange}
        ></input>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={onChange}
        ></input>
        <button type="submit">Iniciar sesión</button>
        <h3 onClick={goRegister}>¿No tienes cuenta? Registrate</h3>
      </form>
    </div>
  );
};