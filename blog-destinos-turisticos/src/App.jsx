import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Registro } from "./components/registro";
import { IniciarSesion } from "./components/iniciarSesion";
import { NuevoPost } from "./components/nuevoPost";
import { ListaDePosts } from "./components/listaDePosts";
import { Perfil } from "./components/perfil";

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Router>
      {isAuthenticated && (
        <button className="logout" onClick={logout}>
          Cerrar sesión
        </button>
      )}
      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<IniciarSesion />} />
        <Route
          path="/nuevoPost"
          element={
            <PrivateRoute>
              <NuevoPost />
            </PrivateRoute>
          }
        />
        <Route
          path="/listaDePosts"
          element={
            <PrivateRoute>
              <ListaDePosts />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;