export async function fetchPokemon({ page = 1 }: { page: number }) {
    const limit = 20;
    const offset = (page - 1) * limit;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const results = await Promise.all(
        data.results.map(async (pokemon: any, index: number) => {
            const details = await fetch(pokemon.url).then((res) => res.json());
            return {
                id: offset + index + 1,
                name: details.name,
                image: details.sprites.other.home.front_default,
                height: details.height,
                weight: details.weight,
            };
        })
    );

    return results;
}
