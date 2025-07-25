// src/components/HeroBanner.jsx

export default function HeroBanner() {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center text-center ">
      {/* <img src="/src/assets/banner1.png" alt="Logo Connect" className="w-100 mx-auto mb-6 drop-shadow-lg " /> */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white font-rajdhani mb-2 drop-shadow-lg">
        ¡Tu mundo gamer, en un solo lugar!
      </h2>
      <p className="text-white text-lg max-w-2xl mx-auto mb-4 font-rajdhani">
        Las mejores PCs, laptops y accesorios para gamers exigentes. Calidad, soporte y entrega rápida.
      </p>
      <a href="#productos" className="inline-block px-8 py-3 bg-gamerRed text-white font-bold rounded-xl shadow-xl hover:bg-red-700 transition text-lg font-rajdhani">
        Ver productos
      </a>
    </section>
  );
}
