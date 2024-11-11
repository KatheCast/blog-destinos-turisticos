import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Perfil = () => {
  const urlApi = "https://67263d98302d03037e6cdf7e.mockapi.io/api";
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${urlApi}/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [params.id]);

  return (
    <div className="perfil-container">
      <h2>Perfil</h2>
      <img src={`${user.avatar}/${user.id}`} alt="avatar" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};