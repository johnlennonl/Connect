import React from "react";

export default function CartSidebar({ cart, onRemove }) {
    // Calcular total
    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <aside className="w-full md:w-80 bg-black/70 rounded-2xl shadow-2xl border border-gamerRed/30 p-6 flex flex-col sticky top-20 h-fit">
            <h2 className="text-2xl font-bold text-gamerRed font-rajdhani mb-3 tracking-widest">Carrito</h2>
            {cart.length === 0 ? (
                <p className="text-neutral-400 text-base font-rajdhani">Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul className="flex-1 space-y-3">
                        {cart.map((item) => (
                            <li key={item.id} className="flex items-center gap-3">
                                <img src={item.imagen} alt={item.nombre} className="w-12 h-12 rounded-lg border border-gamerRed" />
                                <div className="flex-1">
                                    <span className="text-white font-rajdhani">{item.nombre}</span>
                                    <span className="block text-xs text-neutral-400">{item.cantidad} x ${item.precio}</span>
                                </div>
                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-gamerRed hover:text-white font-bold ml-2 text-xl"
                                    title="Eliminar"
                                >
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex flex-col">
                        <span className="text-xl font-extrabold text-white font-rajdhani mb-2">Total: ${total}</span>
                        <button
                            className="bg-gamerRed hover:bg-red-700 text-white font-bold font-rajdhani rounded-md px-5 py-2 mt-2 shadow-md transition-all duration-200 uppercase"
                            disabled={cart.length === 0}
                        >
                            Pagar
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}
