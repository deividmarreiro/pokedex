import "./PokemonCard.scss";

import { PokemonData } from "../../types/Pokemon";

interface PokemonCardProps {
    pokemon: PokemonData;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
            <div className="pokemon-info">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <p className="pokemon-national-number">{`#${String(
                    pokemon.id
                ).padStart(3, "0")}`}</p>
                <ul className="pokemon-types">
                    {pokemon.types.map((typeObj) => (
                        <li
                            key={typeObj.slot}
                            className={`pokemon-type ${typeObj.type.name}`}
                        >
                            <div className="type-icon-container">
                                <img
                                    src={`/images/types-icons/${typeObj.type.name}.svg`}
                                />
                            </div>
                            {typeObj.type.name}
                        </li>
                    ))}
                </ul>
            </div>
            <img
                className="pokemon-image"
                src={pokemon.image}
                alt={pokemon.name}
                loading="lazy"
            />
        </div>
    );
}

export default PokemonCard;
