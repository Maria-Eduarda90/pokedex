"use client";

import { useState } from "react";
import { PokemonCard } from "@/components/card";
import Pagination from "@/components/pagination";
import ModalPokemon from "@/components/modal";

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    types?: string[]
}

interface PokemonListProps {
    pokemons: Pokemon[];
    currentPage: number;
}

export default function PokemonList({ pokemons, currentPage }: PokemonListProps) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    const onOpenModal = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 mt-6">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onOpenModal={onOpenModal} />
                ))}
            </div>
            <Pagination currentPage={currentPage} />
            <ModalPokemon isOpen={modalIsOpen} pokemon={selectedPokemon} onClose={closeModal} />
        </div>
    );
}
