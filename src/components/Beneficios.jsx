// src/components/Beneficios.jsx
export default function Beneficios() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl text-gamerRed font-bold text-center mb-8 tracking-widest uppercase">¿Por qué comprar en CONNECT?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-neutral-900/80 p-6 rounded-xl shadow text-center border border-gamerRed/30 hover:scale-105 transition-transform">
          <span className="text-5xl mb-3 inline-block">🚀</span>
          <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">Envíos Express</h3>
          <p className="text-neutral-300">Recibe tus productos gamer más rápido que nadie.</p>
        </div>
        <div className="bg-neutral-900/80 p-6 rounded-xl shadow text-center border border-gamerRed/30 hover:scale-105 transition-transform">
          <span className="text-5xl mb-3 inline-block">💸</span>
          <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">Mejores Precios</h3>
          <p className="text-neutral-300">Ofertas exclusivas y descuentos todos los días.</p>
        </div>
        <div className="bg-neutral-900/80 p-6 rounded-xl shadow text-center border border-gamerRed/30 hover:scale-105 transition-transform">
          <span className="text-5xl mb-3 inline-block">🛡️</span>
          <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">Garantía Gamer</h3>
          <p className="text-neutral-300">Soporte dedicado y garantía en todos los productos.</p>
        </div>
      </div>
    </section>
  );
}
