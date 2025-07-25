// src/components/ProductCardLanding.jsx

export default function ProductCardLanding({ producto }) {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-black p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform border-2 border-gamerRed/40 hover:border-gamerRed/50 cursor-pointer">
      <img src={producto.imagen} alt={producto.nombre} className="w-100 h-50 object-contain mb-3 " />
      <h3 className="text-xl font-bold text-gamerRed mb-1 font-rajdhani">{producto.nombre}</h3>
      <span className="text-neutral-300 text-sm mb-1">{producto.categoria}</span>
      <span className="text-neutral-400 text-xs mb-2">{producto.specs}</span>
      <span className="text-white text-lg font-bold mb-2">${producto.precio}</span>
      <button className="bg-gamerRed text-white font-bold px-6 py-2 rounded shadow hover:bg-red-700 transition">
        Comprar ahora
      </button>
    </div>
  );
}
