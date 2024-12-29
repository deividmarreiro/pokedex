import "./PokemonCard.scss";

import { PokemonData } from "../../types/Pokemon";

interface PokemonCardProps {
    pokemon: PokemonData;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    onclick = () => {
        alert("Pokemon clicked");
    };
    return (
        <div className="pokemon-card" onClick={() => onclick}>
            <div className="pokemon-card-header">
                <span className="pokemon-id">{pokemon.id}</span>
            </div>
            <div className="pokemon-image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon-card-footer">
                <span className="pokemon-name">{pokemon.name}</span>
            </div>
        </div>
    );
}

export default PokemonCard;
