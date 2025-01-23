"use client";

import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";

interface Pokemon {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    types?: string[];
}

interface PokemonCardProps {
    pokemon: Pokemon;
    onOpenModal: (pokemon: Pokemon) => void;
}

export function PokemonCard({ pokemon, onOpenModal }: PokemonCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.some((fav: Pokemon) => fav.id === pokemon.id));
    }, [pokemon.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = favorites.filter((fav: Pokemon) => fav.id !== pokemon.id);
        } else {
            updatedFavorites = [...favorites, pokemon];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <div className="flex justify-between">
                <button
                    onClick={toggleFavorite}
                    className=''
                >
                    {isFavorite ? <MdFavorite color="#a80714" size={'28px'} /> : <MdOutlineFavoriteBorder color="#000" size={'28px'} />}
                </button>
                <button onClick={() => onOpenModal(pokemon)}>
                    <SlArrowRightCircle size={'28px'} color="#10a5ce" />
                </button>
            </div>
            <img src={pokemon.image} alt={pokemon.name} className="w-full h-32 object-contain mb-4" />
            <h2 className="text-lg font-bold mb-2 text-center">{pokemon.name}</h2>
            <div className="flex justify-center gap-2 text-white">

                {pokemon.types && (
                    <>
                        <span className="bg-cyan-600 py-1 px-2 rounded-xl">{pokemon.types[0]}</span>
                        <span className={`${pokemon.types[1] ? 'bg-orange-600 py-1 px-2 rounded-xl' : ''}`}>{pokemon.types[1]}</span>
                    </>
                )}
            </div>
        </div>
    );
}
