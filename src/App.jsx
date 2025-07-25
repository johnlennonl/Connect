import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SignupFormDemo } from "./components/SignupFormDemo";
import { LoginFormDemo } from "./components/LoginFormDemo";
import Footer from "./components/Footer";
import StarsBackground from "./components/ui/StarsBackground";
import Dashboard from "./components/Dashboard"; // asegúrate de crearlo
import HeroBanner from "./components/HeroBanner";
import ProductGridLanding from "./components/ProductGridLanding";
import Beneficios from "./components/Beneficios";
import Testimonios from "./components/Testimonios";
import WhatsAppButton from "./components/WhatsAppButton";

function Home() {
  return (
    <div className="relative min-h-screen  overflow-hidden font-rajdhani">
      <StarsBackground starColor="#e50914" bgColor="#0e0e0e" />
      <Navbar />

      <header className="relative z-20">
        <HeroBanner />
      </header>

      <section className="w-full max-w-6xl mx-auto mt-8 px-4 relative z-10">
        {/* Productos disponibles */}
        <h2 className="text-3xl text-gamerRed font-bold text-center mb-6 tracking-widest uppercase">
          Productos Destacados
        </h2>
        <ProductGridLanding />
      </section>

      <div className="relative z-10  mt-8 px-8 py-6 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg shadow-lg text-white" id="Login">
        <h2 className="text-3xl text-gamerRed font-bold text-center mb-6 tracking-widest uppercase">
          Únete a la Comunidad Gamer
        </h2>
        <p className="text-center text-neutral-300 mb-6">
          Regístrate para recibir las últimas noticias, ofertas exclusivas y más.
        </p>
      </div>

      <div className="relative z-10 " >
        <main className="min-h-[50vh] flex flex-col col-gap-8 md:flex-row items-center justify-center  py-10 relative z-10 w-full max-w-6xl mx-auto px-4">
        <SignupFormDemo />
        <LoginFormDemo />
        {/* Banner lateral animado: productos, ofertas, o reviews */}
      </main>
      </div>

      <seccion className="w-full max-w-6xl mx-auto mt-8 px-4 relative z-10 cursor-pointer">
        <Beneficios />
        <Testimonios />


      </seccion>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
