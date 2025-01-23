'use client';

import { PokemonCard } from "@/components/card";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { useEffect, useState } from "react";

const fetchPokemons = async (page: number) => {
    const pokemonBaseUrl = 'https://pokeapi.co/api/v2';
    const offset = (page - 1) * 50;
    const response = await fetch(`${pokemonBaseUrl}/pokemon?limit=20&offset=${offset}`);
    const data = await response.json();
    console.log('data: ', data)
    return data.results;
};

export default function home() {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [favorites, setFavorites] = useState<any[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const loadPokemons = async () => {
            const data = await fetchPokemons(currentPage);
            setPokemons(data);
        };
        loadPokemons();
    }, [currentPage]);

    const onOpenModal = (pokemon: any) => {
        setSelectedPokemon(pokemon);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const onFavorite = (pokemon: any) => {
        setFavorites((prev) =>
            prev.some((fav) => fav.name === pokemon.name)
                ? prev.filter((fav) => fav.name !== pokemon.name)
                : [...prev, pokemon]
        );
    };

    const isFavorite = (pokemon: any) => favorites.some((fav) => fav.name === pokemon.name);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div className="relative">
            <Header />
            <div className="flex justify-center p-32">
                <Input />
            </div>

            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {pokemons.map((pokemon: any, index: number) => (
                        <PokemonCard
                            key={pokemon.name}
                            pokemon={{ ...pokemon, id: index + 1 }}
                            onFavorite={onFavorite}
                            isFavorite={isFavorite(pokemon)}
                            onOpenModal={onOpenModal}
                        />
                    ))}
                </div>

                {/* <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
                <ModalPokemon
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    pokemon={selectedPokemon}
                /> */}
            </div>
        </div>
    );
}