import React from "react";

function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-black text-white shadow-md">
            {/*Barra Login */}
            <div className="bg-gamerDark h-1 w-full ">
                <div className="max-w-7xl mx-auto px-4 py-2 mb-2 flex items-center justify-end font-rajdhani text-sm ">
                    <span className="text-gray-400 hover:text-red-500 transition cursor-pointer">Iniciar sesión</span>
                    <span className="text-gray-400 mx-2">|</span>
                    <span className="text-gray-400 hover:text-red-500 transition cursor-pointer">Registrarse</span>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between font-rajdhani ">
                {/* Logo */}
                <img className="w-200 h-16" src="/src/assets/connect2.png" alt="Logotipo" />
                {/* Navegación */}
                <nav className="space-x-8 hidden md:flex font-rajdhani Upercase text-lg cursor-pointer">
                    <a href="#" className="hover:text-red-500 transition">GAMING PCS</a>
                    <a href="#" className="hover:text-red-500 transition">GAMING LAPTOPS</a>
                    <a href="#" className="hover:text-red-500 transition">ACCESORIOS</a>
                    <a href="#" className="hover:text-red-500 transition">SOBRE NOSOTROS</a>
                    <a href="#" className="hover:text-red-500 transition">CONTACTO</a>
                </nav>

                {/* Espacio flexible para centrar el logo */}

                <form
                    class="flex bg-zinc-800 border border-zinc-700 text-white rounded-md shadow text-sm"
                >
                    <div aria-disabled="true" class="w-10 grid place-content-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        spellcheck="false"
                        name="text"
                        class="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 w-20 focus:w-48 transition-all"
                        placeholder="Search..."
                    />

                </form>

                {/* Botón de carrito */}
                <div className="flex items-center">
                    <button className="ml-4 p-2 rounded-full bg-black/50 hover:bg-red-600 transition relative">
                        {/* Heroicon shopping cart SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 13M9 21h.01M15 21h.01" />
                        </svg>
                        {/* Badge de cantidad (opcional) */}

                    </button>
                    {/* Boton de perfil */}
                    <button className="ml-4 p-2 rounded-full bg-black/50 hover:bg-red-600 transition relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11a4 4 0 11-8 0 4 4 0 018 0zM12 14a7.002 7.002 0 00-6.32 4H18.32A7.002 7.002 0 0012 14z" />
                        </svg>
                    </button>
                </div>


                {/* Botón futuro para menú móvil */}
                {/* <div className="md:hidden">
                    <button className="text-red-500 hover:text-white">☰</button>
                </div> */}
            </div>
        </header>
    );
}

export default Navbar;
