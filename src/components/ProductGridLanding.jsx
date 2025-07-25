// src/components/ProductGridLanding.jsx

import ProductCardLanding from "./ProductCardLanding";

const productos = [
  {
    id: 1,
    nombre: "Neuron 6500X",
    imagen: "https://cdn.originpc.com/opc/prebuild/opc-blob-38af4dc8-ba47-4395-94e9-ee0fec7f29d3.png",
    precio: 1699,
    categoria: "PC",
    specs: "RTX 5080 Ryzen 7 9800X3D, 16GB RAM, 2TB NVMe SSD",
  },
  {
    id: 2,
    nombre: "MILLENNIUM Gaming PC",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/prime-millenium-system-image.png",
    precio: 1999,
    categoria: "PC",
    specs: "Intel i9, RTX 3070 Ti, 32GB RAM, 1TB SSD",
  },
  {
    id: 3,
    nombre: "VENGEANCE i7500",
    imagen: "https://cdn.originpc.com/opc/prebuild/opc-blob-36a7cf0c-de24-4abd-9672-c2accc303953.png",
    precio: 2499,
    categoria: "PC",
    specs: "RTX 4070TI SUPER i7-14700KF, 32GB RAM, 2TB SSD",
  },
  {
    id: 4,
    nombre: "EON18-X 18in GAMING LAPTOP",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-laptops/eon16-x-system-image.png",
    precio: 2199,
    categoria: "Laptop",
    specs: "RTX 5090 NVIDIA GeForce , 24GB RAM, 1TB SSD",
  },
  {
    id: 5,
    nombre: "EON 16-X V2",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-laptops/eon16-x-cod-wz-system-image.png",
    precio: 1599,
    categoria: "Laptop",
    specs: "16' QHD+ 240Hz - Intel Core Ultra 9 275HX NVIDIA RTX 5080, 32GB RAM, 1TB SSD ",
  },
  {
    id: 6,
    nombre: "EON16-X",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-laptops/eon16-x-40-series-system-image.png",
    precio: 2199,
    categoria: "Laptop",
    specs: "NVIDIA GeForce RTX 4090 8GB GDDR6 - Intel Core i9-13900HX, 32GB RAM, 1TB SSD",
  },
  {
    id: 7,
    nombre: "ARACHNID Gaming PC",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/arachnid-system-image.png",
    precio: 1799,
    categoria: "PC",
    specs: "NVIDIA GeForce RTX 4060 8GB GDDR6 - Intel Core i7-13700H, 16GB RAM, 1TB SSD",
  },
  {
    id: 8,
    nombre: "ORIGIN PC Gaming Mouse",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/prime-genesis-system-image.png",
    precio: 1449.99,
    categoria: "PC",
    specs: "NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X - Intel Core i7-13700K, 16GB RAM, 1TB SSD",
  },
  {
    id: 9,
    nombre: "ORIGIN PC Gaming Keyboard",
    imagen: "https://cdn.originpc.com/img/compare-all/gaming-desktops/neuron-4000d-opc-system-image.png",
    precio: 1559.99,
    categoria: "PC",
    specs: "NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X - Intel Core i7-13700K, 16GB RAM, 1TB SSD",
  },
];

export default function ProductGridLanding() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {productos.map((prod) => (
        <ProductCardLanding key={prod.id} producto={prod} />
      ))}
    </div>
  );
}
