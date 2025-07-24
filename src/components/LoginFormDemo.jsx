import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandApple,
} from "@tabler/icons-react";

export function LoginFormDemo() {
    const handleLogin = (e) => {
        e.preventDefault();
        alert("¡Bienvenido de nuevo, gamer! 🎮");
    };
    return (
        <div
            className="shadow-xl mx-auto w-full max-w-md rounded-2xl bg-gradient-to-br from-gamerDark p-6 md:p-10 border-2 border-gamerDark relative overflow-hidden bg-transparent"
        >
            {/* Glow rojo brutal */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gamerRed rounded-full blur-2xl opacity-30 animate-pulse z-0" />
            {/* Glow negro para profundidad */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neutral-900 rounded-full blur-2xl opacity-50 z-0" />

            <h2 className="text-4xl font-bold text-Upercase tracking-wide text-center drop-shadow-lg z-10 relative text-white font-rajdhani ">
                Inicia sesión
            </h2>
            <p className="mt-2 mb-6 text-center text-neutral-300 z-10 relative">
                Ingresa a <span className="text-gamerRed font-bold">CONNECT</span> y accede a tu mundo gamer 🔥
            </p>
            <form className="space-y-5 z-10 relative font-rajdhani" onSubmit={handleLogin}>
                <LabelInputContainer>
                    <Label className="text-white" htmlFor="login-email">Email Gamer</Label>
                    <Input id="login-email" placeholder="tugamer@email.com" type="email" className="bg-neutral-800 border-gamerRed/40 focus:border-gamerRed text-white" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label className="text-white" htmlFor="login-password">Contraseña</Label>
                    <Input id="login-password" placeholder="••••••••" type="password" className="bg-neutral-800 border-gamerRed/40 focus:border-gamerRed text-white" />
                </LabelInputContainer>
                <button
                    className="relative block h-11 w-full rounded-lg bg-gamerRed text-lg font-bold uppercase tracking-widest shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gamerRed focus:ring-offset-2"
                    type="submit">
                    Ingresar
                    <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-gamerRed/60 to-transparent blur-sm opacity-70"></span>
                </button>
                <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gamerRed to-transparent" />

                <div className="flex flex-col gap-3">
                    <AuthButton icon={<IconBrandGithub className="h-5 w-5" />} text="GitHub" color="bg-neutral-900 text-white" />
                    <AuthButton icon={<IconBrandGoogle className="h-5 w-5" />} text="Google" color="bg-white text-neutral-900" />
                    <AuthButton icon={<IconBrandApple className="h-5 w-5" />} text="Apple" color="bg-black text-white" />
                </div>
            </form>
        </div>
    );
}

// Usa los mismos componentes auxiliares:
const AuthButton = ({ icon, text, color }) => (
    <button
        className={cn(
            "flex items-center gap-2 h-10 w-full rounded-md font-medium px-4 transition shadow border border-gamerRed/30 hover:scale-105 hover:shadow-lg",
            color
        )}
        type="button"
    >
        {icon}
        <span className="text-base">{text}</span>
    </button>
);

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);
