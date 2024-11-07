export const Registro = () => {
    return (
        <div>
          <h2>Registro</h2>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
          </form>
        </div>
    );
}