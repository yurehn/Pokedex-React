import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getPokemonList from './api/getPokemonList';
import CardPokemon from './component/CardPokemon';
import Pagination from './component/Pagination';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 38px;
    row-gap: 35px;
    margin: 80px 80px;
    /* opacity: 1;
    transition: opacity 5s ease-in; */
`

const StyledDivLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    /* opacity: 0;
    transition: opacity 5s ease-in; */
    

    div.loader {
        width: 80px;
        height: 80px;

        &::before {
            content: "";
            box-sizing: border-box;
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border-top: 2px solid #8900FF;
            border-right: 2px solid transparent;
            animation: spinner 0.8s linear infinite;
        }
        @keyframes spinner {
            to {
                transform: rotate(360deg);
            }
        }
    }
`

const App = () => {

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [pokemonsList, setPokemonsList] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getPokemonList(currentPage).then(({ pokemonsData, totalPages }) => {
            setPokemonsList(pokemonsData);
            setTotalPages(totalPages);
            setLoading(false);
        });
       
    }, [currentPage]);
    

    if (loading) {
        return (
            <StyledDivLoading>
              <div className='loader'></div>
            </StyledDivLoading>
        )
      }
    return (
        <StyledDiv>
            {
                pokemonsList.map(pokemon => {
                    return <CardPokemon key={pokemon.name} PokemonData={pokemon} />
                })
            }

            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </StyledDiv>
    );
};

export default App;
