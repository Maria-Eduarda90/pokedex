import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const PokemonCard = ({ pokemon, onFavorite, isFavorite, onOpenModal }: any) => (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
        <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.gif`}
            alt={pokemon.name}
            className="w-32 h-32"
        />
        <h3 className="mt-2 font-bold">{pokemon.name}</h3>
        <div className="flex gap-2 mt-2">
            <button
                onClick={() => onFavorite(pokemon)}
                className="text-lg text-red-500"
            >
                {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <button
                onClick={() => onOpenModal(pokemon)}
                className="text-lg text-blue-500"
            >
                Ver mais
            </button>
        </div>
    </div>
);

