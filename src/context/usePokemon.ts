import { useState } from "react";

const pokemonBaseUrl = 'https://pokeapi.co/api/v2';

const [loading, setLoading] = useState(false);

const fetchPokemon = async (page = 1) => {
    setLoading(true);

    try {
        const offset = (page - 1) * 50;
        const res: any = await fetch(`${pokemonBaseUrl}/pokemon?limit=20&offset=${offset}`);

        console.log(res.data.results)
    } catch (error) {

    }
}