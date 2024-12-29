import { useEffect, useState } from "react";
import { PokemonData } from "../../types/Pokemon";
import { fetchPokemonDetails } from "../../services/pokemonService";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./Home.scss";

function Home() {
    const [pokemons, setPokemons] = useState<PokemonData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState(1); // Controla a página atual

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const start = (page - 1) * 50 + 1;
                const end = page * 50;

                const pokemonPromises = [];
                for (let i = start; i <= end; i++) {
                    pokemonPromises.push(fetchPokemonDetails(i));
                }
                const fetchedPokemons = await Promise.all(pokemonPromises);

                setPokemons((prev) => [...prev, ...fetchedPokemons]);
            } catch (err) {
                console.log(err);
                setError("Failed to load pokemons");
            } finally {
                setLoading(false);
            }
        };

        loadPokemons();
    }, [page]);

    const loadNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            <h1 className="page-title">Pokédex</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="pokemon-grid">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            {!loading && (
                <button onClick={loadNextPage}>Load More Pokémons</button>
            )}
        </>
    );
}

export default Home;
