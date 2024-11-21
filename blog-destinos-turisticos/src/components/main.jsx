
export const Footer = () => {
    return (
        <div className="login-container">
           <header class="hero">
            <nav class="nav__hero">
                <div class="container nav__container">
                    <div class="logo">
                        <h2 class="logo__name">Pasaporte a la aventura<span class="point">.</span></h2>
                    </div>
                    <div class="links">
                        <a href="/index.html" class="link">Inicio</a>
                        <a href="/index.html" class="link">Publicaciones</a>
                        <a href="/index.html" class="link">Servicios</a>
                        <a href="/index.html" class="link">Contactanos</a>
                        
                        <a href="/login.html" class="link link--active ">iniciar sesion <i class='bx bx-log-in-circle'></i></a>
                        
                    </div>
                </div>
            </nav>
            <div class="wrapper">
                <form action="">
                    <h1>Login</h1>
                <div class="input-box">
                    {/* <input type="text" placeholder="Username" required> */}
                    <i class='bx bx-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required></input>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox">Remember me</input></label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Login</button>

                <div class="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>

        </div>
    </header>
    </div>
  ) };    