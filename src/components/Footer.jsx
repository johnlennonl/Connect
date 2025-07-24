import { IconBrandInstagram, IconBrandWhatsapp, IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="relative bg-gamerDark pt-12 pb-6  z-10 overflow-hidden shadow-xl">
      {/* Glow efecto */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-gamerRed/30 blur-2xl rounded-full pointer-events-none animate-pulse z-0" />
      {/* Líneas animadas */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-gamerRed/40 to-transparent blur-sm animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-8">
        {/* Logo y nombre */}
        <div className="flex items-center gap-4">
          <img src="/src/assets/connect2.png" alt="Connect Logo" className="w-200 h-16  object-contain " />
          
        </div>

        {/* Enlaces rápidos */}
        <div className=" flex flex-wrap gap-8 md:gap-14 items-center text-base font-medium text-white">
          <a href="#" className="hover:text-white font-rajdhani transition duration-200">Inicio</a>
          <a href="#" className="hover:text-white font-rajdhani transition duration-200">Productos</a>
          <a href="#" className="hover:text-white font-rajdhani transition duration-200">Nosotros</a>
          <a href="#" className="hover:text-white font-rajdhani transition duration-200">Contacto</a>
          <a href="#" className="hover:text-white font-rajdhani transition duration-200">Soporte</a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <FooterIconLink
            href="https://instagram.com/"
            label="Instagram"
            className="text-pink-600 hover:text-gamerRed"
            Icon={IconBrandInstagram}
          />
          <FooterIconLink
            href="https://wa.me/XXXXXXXX"
            label="WhatsApp"
            className="text-green-500 hover:text-gamerRed"
            Icon={IconBrandWhatsapp}
          />
          <FooterIconLink
            href="https://github.com/"
            label="GitHub"
            className="text-white hover:text-gamerRed"
            Icon={IconBrandGithub}
          />
          <FooterIconLink
            href="https://youtube.com/"
            label="YouTube"
            className="text-red-600 hover:text-gamerRed"
            Icon={IconBrandYoutube}
          />
        </div>
      </div>

      {/* Línea inferior y copyright */}
      <div className="relative z-10 mt-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} CONNECT. Todos los derechos reservados.</span>
        <span className="text-xs text-gray-500 mt-2 md:mt-0">Diseñado con <span className="text-gamerRed">♥</span> por <span className="font-bold text-white">John Lennon</span></span>
      </div>
    </footer>
  );
}

function FooterIconLink({ href, label, Icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`rounded-full bg-black/60 hover:bg-gamerRed/80 p-2 transition duration-200 shadow-md flex items-center justify-center ${className}`}
    >
      <Icon size={24} />
    </a>
  );
}
