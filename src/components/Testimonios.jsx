// src/components/Testimonios.jsx
export default function Testimonios() {
  return (
    <section className=" w-full max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl text-gamerRed font-bold text-center mb-8 tracking-widest uppercase">Testimonios de Gamers</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="bg-neutral-900/80 p-6 rounded-xl shadow text-center border border-gamerRed/20">
          <p className="text-neutral-300 mb-4 font-rajdhani">"¡Compré mi PC en Connect y llegó rapidísimo! El mejor soporte, 100% recomendado."</p>
          <span className="block font-bold text-white">- Alex R.</span>
        </div>
        <div className="bg-neutral-900/80 p-6 rounded-xl shadow text-center border border-gamerRed/20">
          <p className="text-neutral-300 mb-4 font-rajdhani">"Los precios brutales y la atención de lujo. ¡Volveré a comprar!"</p>
          <span className="block font-bold text-white">- Daniela M.</span>
        </div>
      </div>
    </section>
  );
}
