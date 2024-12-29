interface Ability {
    name: string;
    url: string;
}

interface PokemonAbility {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}
interface Type {
    name: string;
    url: string;
}

interface PokemonType {
    slot: number;
    type: Type;
}

interface PokemonData {
    id: number;
    name: string;
    types: PokemonType[];
    weight: number;
    height: number;
    abilities: PokemonAbility[];
    description: string;
    base_stats: {
        hp: number;
        atk: number;
        def: number;
        stak: number;
        sdef: number;
        spd: number;
    };
    image: string;
}

export type { PokemonAbility, PokemonData, PokemonType };
