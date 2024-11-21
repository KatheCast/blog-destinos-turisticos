import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Mai} from "./components/main";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { IniciarSesion } from "./components/iniciarSesion";
import { ListaDePosts } from "./components/listaDePosts";
import { NuevoPost } from "./components/nuevoPost";
import { Perfil } from "./components/perfil";
import { Registro } from "./components/registro";

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
  <>
  <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
  <Router>
    <Header />
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
      <Footer />
    </Router>
  </>
    
  );
}

export default App;