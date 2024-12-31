import { PokemonData } from "../types/Pokemon";

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
        types: data.types.map(
            (typeObj: {
                slot: number;
                type: { name: string; url: string };
            }) => ({
                slot: typeObj.slot,
                type: {
                    name: typeObj.type.name,
                    url: typeObj.type.url,
                },
            })
        ),
        weight: data.weight,
        height: data.height,
        abilities: data.abilities.map(
            (abilityObj: {
                ability: { name: string; url: string };
                is_hidden: boolean;
                slot: number;
            }) => ({
                ability: {
                    name: abilityObj.ability.name,
                    url: abilityObj.ability.url,
                },
                is_hidden: abilityObj.is_hidden,
                slot: abilityObj.slot,
            })
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
