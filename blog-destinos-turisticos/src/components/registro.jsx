import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
      avatar: "https://avatar.iran.liara.run/public",
    };
    fetch(`${urlApi}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/login");
  };

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          required
          onChange={onChange}
          name="name"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          required
          onChange={onChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          onChange={onChange}
          name="password"
        />
        <button type="submit">Registrarse</button>
        <h3 onClick={goLogin}>¿Ya tienes cuenta? inicia sesión</h3>
      </form>
    </div>
  );
};

