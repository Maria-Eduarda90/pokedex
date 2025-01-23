"use client";

import { useEffect, useState } from "react";
import { PokemonCard } from "@/components/card";
import { Header } from "@/components/header";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);

    return (
        <>
            <Header />
            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">Favorite Pokémon</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {favorites.map((pokemon: any) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} onOpenModal={() => { }} />
                    ))}
                </div>
            </div>
        </>
    );
}
