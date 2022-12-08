function formatName(name) {
  if (name.includes("♀")) {
    return name.replace("♀", "-f");
  } else if (name.includes("♂")) {
    return name.replace("♂", "-m");
  } else if (name.includes(". ")) {
    return name.replace(". ", "-");
  } else if (name.includes("farfetch'd")) {
    return name.replace("farfetch'd", "farfetchd");
  } else {
    return name;
  }
}

export async function fetchPokemons() {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const results = await response.json();
  console.log("results", results);
  const pokemons = results.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon, index) =>
      pokemons.findIndex((other) => other.id === pokemon.id) === index
  );
  return uniquePokemons;
}

export async function fetchPokemon(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatName(pokemonName)}`
  );

  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  console.log(result);
  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: result.sprites.front_default,
    hp: result.stats[0]?.base_stat,
    attack: result.stats[1]?.base_stat,
    defense: result.stats[2]?.base_stat,
  };
  return pokemon;
}
