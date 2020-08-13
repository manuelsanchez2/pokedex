export async function fetchPokemons() {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    if (!response.ok) {
        throw new Error(response);
    }
    const results = await response.json();
    const pokemons = results.results.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: pokemon.sprites.animated,
        link: `#${pokemon.name.toLowerCase()}`,
    }));

return pokemons;
}