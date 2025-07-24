import Navbar from "./components/Navbar";
import { SignupFormDemo } from "./components/SignupFormDemo";
import { LoginFormDemo } from "./components/LoginFormDemo";
import Footer from "./components/Footer";
import StarsBackground from "./components/ui/StarsBackground";


function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <StarsBackground starColor="#e50914" bgColor="#0e0e0e" />
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center py-10 px-2 relative z-10">
        {/* Título y párrafo arriba de los forms */}
        <div className="w-full max-w-4xl mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold font-rajdhani text-center text-gamerRed uppercase drop-shadow-lg tracking-widest animate-pulse mb-2">
            Bienvenido a la Zona Gamer de <span className="text-white">CONNECT</span>
          </h1>
          <p className="text-lg text-center text-neutral-300 font-rajdhani mb-4">
            ¡Crea tu cuenta o inicia sesión para acceder al mundo gamer definitivo!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center">
          <SignupFormDemo />
          <LoginFormDemo />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
