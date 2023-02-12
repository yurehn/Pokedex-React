import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getPokemonList from './api/getPokemonList';
import CardPokemon from './component/CardPokemon';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 38px;
    row-gap: 35px;
    margin: 80px 80px;
`

const App = () => {
    const [pokemonsList, setPokemonsList] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getPokemonList().then(data => {
            setPokemonsList(data);
            setLoading(false);
        });
       
    }, []);
    

    if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <StyledDiv>
            {
                pokemonsList.map(pokemon => {
                    return <CardPokemon key={pokemon.name} PokemonData={pokemon} />
                })
            }
        </StyledDiv>
    );
};

export default App;
