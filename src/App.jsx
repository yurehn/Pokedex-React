import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getPokemonList from './api/getPokemonList';
import getPokemonName from './api/getPokemonName';
import SearchPokemon from './component/SearchPokemon';
import CardPokemon from './component/CardPokemon';
import Pagination from './component/Pagination';


const ContainerPokemons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 38px;
    row-gap: 35px;
    margin: 80px 80px 50px 80px;

    @media (max-width: 500px) {
      margin: 80px 10px 50px 10px;
    }
`

const LoadingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;

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

    const [valueSearch, setValueSearch] = useState('');
    const [searchError, setSearchError] = useState(false);

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [pokemonsList, setPokemonsList] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setSearchError(false)

        if (valueSearch !== '') {
            
            getPokemonName(valueSearch).then(response => {
                if (response !== undefined) {
                    setPokemonsList([response]);
                    setTotalPages(1);
                    setLoading(false);

                } else{
                    setLoading(false)
                    setSearchError(true)
                }
            });
        } else {
            getPokemonList(currentPage).then(({ pokemonsData, totalPages }) => {
                setPokemonsList(pokemonsData);
                setTotalPages(totalPages);
                setLoading(false);
            });
        }
       
    }, [currentPage, valueSearch]);
    

    return (
        <>
            <SearchPokemon setValueSearch={setValueSearch} searchError={searchError} setSearchError={setSearchError}/>

            {
               loading ?
                    <LoadingBox>
                        <div className='loader'></div>
                    </LoadingBox>
                :
                    <>
                        <ContainerPokemons>
                            {
                                pokemonsList.map(pokemon => {
                                    return <CardPokemon key={pokemon.name} PokemonData={pokemon} />
                                })
                            }
                        </ContainerPokemons>

                        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    </>
            }

        </>
    );
};

export default App;
