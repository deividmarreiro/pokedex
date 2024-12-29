import { PokemonAbility, PokemonData, PokemonType } from "../types/Pokemon";

export async function fetchPokemonDetails(
    pokemonId: number
): Promise<PokemonData> {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();

    const mappedData: PokemonData = {
        id: data.id,
        name: data.name,
        types: data.types.map((type: PokemonType) => type.type.name),
        weight: data.weight,
        height: data.height,
        abilities: data.abilities.map(
            (ability: PokemonAbility) => ability.ability.name
        ),
        description: "",
        base_stats: {
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            stak: data.stats[3].base_stat,
            sdef: data.stats[4].base_stat,
            spd: data.stats[5].base_stat,
        },
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    };

    return mappedData;
}

export async function fetchPokemonSpecies(pokemonId: number) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    const data = await response.json();
    return data;
}
