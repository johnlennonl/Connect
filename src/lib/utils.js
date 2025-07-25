import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Esta función asegura que puedas combinar condicionales, arrays y merges de clases de Tailwind correctamente
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
