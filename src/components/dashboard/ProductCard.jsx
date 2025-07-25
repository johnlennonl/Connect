import React from "react";

export default function ProductCard({ producto, onAddToCart }) {
    return (
        <div className="bg-transparent shadow-2xl p-5 flex flex-col md:flex-row gap-4 items-center  hover:scale-105 hover:shadow-[0_0_24px_2px_#e5091490] transition-all duration-300 group relative overflow-hidden">
            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-400 h-32 object-contain   group-hover:scale-110 transition duration-300"
            />
            <div className="flex flex-col flex-1 items-start">
                <h3 className="font-bold text-xl text-gamerRed mb-1 font-rajdhani">
                    {producto.nombre}
                </h3>
                <span className="text-white font-medium mb-2">
                    {producto.categoria}
                </span>
                <p className="text-neutral-300 text-sm mb-2">{producto.specs}</p>
                <span className="text-2xl font-extrabold text-white font-rajdhani drop-shadow-lg mb-2">
                    ${producto.precio}
                </span>
                <button
                    className="bg-gamerRed hover:bg-red-700 text-white font-rajdhani font-bold rounded-md px-4 py-2 mt-2 shadow-lg transition-all duration-200 uppercase tracking-wider"
                    onClick={() => onAddToCart(producto)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
