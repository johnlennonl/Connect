import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import CartSidebar from "./CartSidebar";
import SearchBar from "./SearchBar";


// --- Array de productos de ejemplo
const productosDemo = [
    {
        id: 1,
        nombre: "ASUS ROG Zephyrus G14",
        imagen: "https://cdn.originpc.com/img/compare-all/gaming-laptops/eon18-x-system-image.png",
        precio: 1699,
        categoria: "Laptop",
        specs: "AMD Ryzen 9, RTX 4060, 32GB RAM, 1TB SSD",
    },
    {
        id: 2,
        nombre: "Alienware m15 R7",
        imagen: "https://cdn.originpc.com/img/compare-all/gaming-laptops/eon16-x-cod-wz-system-image.png",
        precio: 1999,
        categoria: "Laptop",
        specs: "Intel i9, RTX 3070 Ti, 32GB RAM, 1TB SSD",
    },
    {
        id: 3,
        nombre: "Lenovo Legion 5 Pro",
        imagen: "https://cdn.originpc.com/img/compare-all/gaming-laptops/eon16-x-system-image.png",
        precio: 1499,
        categoria: "Laptop",
        specs: "Ryzen 7, RTX 3060, 16GB RAM, 512GB SSD",
    },
    {
        id: 4,
        nombre: "MSI Raider GE76",
        imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/prime-genesis-system-image.png",
        precio: 2199,
        categoria: "Laptop",
        specs: "Intel i9, RTX 3080, 32GB RAM, 2TB SSD",
    },
    {
        id: 5,
        nombre: "HP OMEN 45L Desktop",
        imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/prime-millenium-system-image.png",
        precio: 2499,
        categoria: "PC",
        specs: "Intel i9, RTX 4090, 64GB RAM, 2TB SSD",
    },
    {
        id: 6,
        nombre: "Corsair Vengeance i7400",
        imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/arachnid-system-image.png",
        precio: 2899,
        categoria: "PC",
        specs: "Intel i7, RTX 4080, 32GB RAM, 1TB SSD",
    },
];

export default function PanelPrincipal() {
    // --- State para carrito y search
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    // --- Función para agregar producto al carrito
    const handleAddToCart = (producto) => {
        setCart((prev) => {
            // Si ya existe en carrito, aumenta cantidad
            const exists = prev.find((item) => item.id === producto.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }
            // Si no, lo agrega con cantidad 1
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    // --- Función para quitar producto del carrito
    const handleRemoveFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // --- Productos filtrados por search
    const filteredProducts = productosDemo.filter((prod) =>
        prod.nombre.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto pt-10 relative z-10 min-h-[90vh]">
            <div className="flex-1">
                <SearchBar search={search} setSearch={setSearch} />
                <ProductGrid productos={filteredProducts} onAddToCart={handleAddToCart} />
            </div>
            <CartSidebar cart={cart} onRemove={handleRemoveFromCart} />
        </div>
    );
}
