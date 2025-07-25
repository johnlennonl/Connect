import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState(null);

  // Escucha si el usuario está logueado
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/90 text-white shadow-xl">
      {/* Barra Login arriba */}
      <div className="bg-gamerDark h-1 w-full" />
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between font-rajdhani">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img className="w-40 h-14 object-contain" src="/src/assets/connect2.png" alt="Logotipo" />
        </a>
        {/* Navegación */}
        <nav className="space-x-8 hidden md:flex font-rajdhani uppercase text-lg cursor-pointer">
          <NavLink href="#" text="GAMING PCS" />
          <NavLink href="#" text="GAMING LAPTOPS" />
          <NavLink href="#" text="ACCESORIOS" />
          <NavLink href="#" text="SOBRE NOSOTROS" />
          <NavLink href="#" text="CONTACTO" />
        </nav>

        {/* Buscador */}
        <form className="flex bg-zinc-800 border border-zinc-700 text-white rounded-md shadow text-sm transition-all focus-within:border-gamerRed ml-3">
          <div aria-disabled="true" className="w-10 grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            type="text"
            spellCheck="false"
            name="text"
            className="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 w-50 focus:w-48 transition-all"
            placeholder="Buscar..."
          />
          
        </form>

        {/* Botones derecha */}
        <div className="flex items-center">
         
          {/* Login/Register o Usuario */}
          <div className="ml-4 flex items-center">
            {user ? (
              <>
                <span className="flex items-center gap-2 text-gamerRed font-bold animate-pulse">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  {user.displayName || user.email}
                </span>
                <button
                  className="ml-4 px-3 py-1 rounded bg-gamerRed hover:bg-red-800 font-bold uppercase tracking-wider text-sm shadow transition"
                  onClick={() => {
                    const auth = getAuth();
                    signOut(auth).then(() => {
                      window.location.href = "/";
                    });
                  }}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <a href="#Login" className="text-gray-300 hover:text-gamerRed transition px-2 font-bold">Iniciar sesión</a>
                <span className="text-gray-500">|</span>
                <a href="/register" className="text-gray-300 hover:text-gamerRed transition px-2 font-bold">Registrarse</a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Componente para links con hover brutal
function NavLink({ href, text }) {
  return (
    <a
      href={href}
      className="relative px-3 py-1 transition duration-200 rounded hover:text-gamerRed hover:scale-110 hover:bg-white/5
      after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gamerRed after:transition-all after:duration-300 hover:after:w-full after:mt-1"
      style={{ fontWeight: "bold", letterSpacing: "0.08em" }}
    >
      {text}
    </a>
  );
}

export default Navbar;
