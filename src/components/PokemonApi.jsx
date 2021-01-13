import React, {useState} from 'react';

const PokemonApi = () => {

    const btnStyle={
        backgroundColor: "green"
    }
    const [pokemon, setPokemon] = useState([]);

        const findPokemon = () =>{
            fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
            .then(response => response.json())
            .then(response => {setPokemon(response.results)})
            .catch(err => {console.log(err)
            })
        }

    return(
        <>
            <div>
                <h1>Api Info</h1>
                <button onClick={findPokemon} style={btnStyle}>Get Pokemon</button>
                {
                    pokemon.map((item, i) => {
                        return <div key={i}>
                            <h4>{item.name}</h4>
                        </div>
                    })
                }
            </div>
        </>
    );
};
export default PokemonApi;