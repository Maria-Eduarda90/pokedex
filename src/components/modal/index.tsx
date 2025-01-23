"use client";

interface ModalPokemonProps {
    isOpen: boolean;
    pokemon: any;
    onClose: () => void;
}

export default function ModalPokemon({ isOpen, pokemon, onClose }: ModalPokemonProps) {
    if (!isOpen || !pokemon) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md shadow-lg">
                <div className="text-center rounded-lg bg-slate-200 p-2">
                    <h2 className="text-xl font-bold mb-4 text-cyan-700">{pokemon.name}</h2>
                </div>
                <div className="flex flex-col p-6 gap-4">
                    <img src={pokemon.image} alt={pokemon.name} className="w-full h-56 object-contain mb-4" />
                    <div className="flex justify-center gap-2 text-white">

                        {pokemon.types && (
                            <>
                                <span className="bg-cyan-600 py-1 px-2 rounded-xl">{pokemon.types[0]}</span>
                                <span className={`${pokemon.types[1] ? 'bg-orange-600 py-1 px-2 rounded-xl' : ''}`}>{pokemon.types[1]}</span>
                            </>
                        )}
                    </div>
                    <div className="flex justify-around mt-4">
                        <p>Altura: {pokemon.height}</p>
                        <p>Peso: {pokemon.weight}</p>
                    </div>

                    <div>
                        <p>{pokemon.description}</p>
                    </div>

                    <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                        fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
