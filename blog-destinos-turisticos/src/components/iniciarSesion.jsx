import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const valid_users = [
  {
    email: "jacobo@gmail.com",
    password: "12345678",
    id: "2",
  },
  {
    email: "email 3",
    password: "password 3",
    id: "3"
  },
];

export const IniciarSesion = () => {
  const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/";
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
        <h3 onClick={goRegister}>¿No tienes cuenta? registrate</h3>
      </form>
    </div>
  );
};