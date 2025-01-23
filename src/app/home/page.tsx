import { Header } from "@/components/header";
import PokemonList from "@/components/pokemonList";
import { fetchPokemon } from "../../lib/fetchPokemon";
import { Input } from "@/components/input";
import { MdCatchingPokemon } from "react-icons/md";

interface ParamsProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: ParamsProps) {
    const currentPage = parseInt((await searchParams).page || "1", 10);
    const pokemons = await fetchPokemon({ page: currentPage });

    const totalPokemons = currentPage * 20;

    return (
        <div className="relative">
            <Header />
            <div className="flex justify-center pt-32">
                <Input />
            </div>

            <div className="p-10">
                <div className="flex items-center gap-2">
                    <MdCatchingPokemon size={'28px'} color="#9f0202" />
                    <h1>Total: {totalPokemons} de Pokémons</h1>
                </div>
                <PokemonList pokemons={pokemons} currentPage={currentPage} />
            </div>

        </div>
    );
}
