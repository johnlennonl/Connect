import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full flex justify-center mb-2">
      <input
        type="text"
        className="w-full md:w-96 px-5 py-3 rounded-full bg-neutral-900 text-white border-2 border-gamerRed/30 focus:border-gamerRed outline-none shadow-lg font-rajdhani text-lg placeholder:text-neutral-400 transition-all duration-200"
        placeholder="Buscar laptop, PC, modelo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
