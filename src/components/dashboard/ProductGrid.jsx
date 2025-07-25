import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ productos, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      {productos.length === 0 && (
        <p className="text-center text-lg text-gamerRed font-rajdhani col-span-2">
          No se encontraron productos.
        </p>
      )}
      {productos.map((prod) => (
        <ProductCard key={prod.id} producto={prod} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
