
import imagen from '../assets/img/Bg1.jpg';

export const Header = () => {
  return (
    <header className="hero">
        <nav className="nav__hero">
            <div className="container nav__container">
                <div className="logo">
                    <h2 className="logo__name">Pasaporte a la aventura<span className="point">.</span></h2>
                </div>
                <div className="links">
                    <a href="#" className="link">Inicio</a>
                    <a href="#" className="link">Publicaciones</a>
                    <a href="#" className="link">Servicios</a>
                    <a href="#" className="link">Contactanos</a>
                    
                    <a href="/login.html" className="link link--active ">iniciar sesion <i className='bx bx-log-in-circle'></i></a>
                    
                </div>
            </div>
        </nav>


        <section className="container hero__main">  
                <div className="hero__textos">
                    <h1 className="title">Explora <span className="title--active">Hermosos Lugares.</span></h1> 
                    <p className="copy">Nos encargamos de brindarte una asesoría al <span className="copy__active">siguiente nivel</span></p>
                </div>
                <img  id="background-top" src={imagen} alt="" />
                
        </section>

        <div className="wave">
            <div style={{height: "150px", overflow: "hidden"}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" style={{stroke: "none", fill: "#fff"}}>
                    </path>
                </svg>
            </div>
        </div>
    </header>
  )
}
