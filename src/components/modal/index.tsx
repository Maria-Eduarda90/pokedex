"use client";

interface ModalPokemonProps {
    isOpen: boolean;
    pokemon: any;
    onClose: () => void;
}

export default function ModalPokemon({ isOpen, pokemon, onClose }: ModalPokemonProps) {
    if (!isOpen || !pokemon) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name} className="w-full h-48 object-contain mb-4" />
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}
