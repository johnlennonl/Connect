// src/components/Dashboard.jsx
import Navbar from "./Navbar";
import StarsBackground from "./ui/StarsBackground";
import PanelPrincipal from "./dashboard/PanelPrincipal";
import Footer from "./Footer";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
        <Navbar />
      <StarsBackground starColor="#e50914" bgColor="#0e0e0e" />
    <div className="mt-20 px-4 sm:px-6 lg:px-8">

      <PanelPrincipal />

       </div>
       <Footer />
    </div>
  );
}
