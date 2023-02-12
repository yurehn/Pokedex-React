import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../theme/theme';

const elementIcons = {
    normal: '/public/element_icons/normal.svg',
    fighting: '/public/element_icons/fighting.svg',
    flying: '/public/element_icons/flying.svg',
    poison: '/public/element_icons/poison.svg',
    ground: '/public/element_icons/ground.svg',
    rock: '/public/element_icons/rock.svg',
    bug: '/public/element_icons/bug.svg',
    ghost: '/public/element_icons/ghost.svg',
    steel: '/public/element_icons/steel.svg',
    fire: '/public/element_icons/fire.svg',
    water: '/public/element_icons/water.svg',
    grass: '/public/element_icons/grass.svg',
    electric: '/public/element_icons/electric.svg',
    psychic: '/public/element_icons/psychic.svg',
    ice: '/public/element_icons/ice.svg',
    dragon: '/public/element_icons/dragon.svg',
    dark: '/public/element_icons/dark.svg',
    fairy: '/public/element_icons/fairy.svg',
    shadow: '/public/element_icons/ghost.svg'
  };

const StyledDiv = styled.div`
    
    background-color: ${props => theme.card[props.type][0]};
    border: 2px solid ${props => theme.card[props.type][1]};

    width: 210px;
    height: 300px;
    border-radius: 25px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
    &:hover {
        box-shadow:rgba(0, 0, 0, 0.4) 0 19px 38px 10px, rgba(0, 0, 0, 0.3) 0 15px 12px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        transition: all 0.4s ease-in-out;
        transform: translateY(-15px) scale(1.05);
    }

    & > img {
        margin: 10px 0px;
    }
`

const StyledH3 = styled.h3`
    text-transform: capitalize;
    margin: 8px 0px;
    font-size: 21px; 
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
`

const StyledDivContainerType = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    row-gap: 8px;
    flex-wrap: wrap;

    justify-content: space-evenly;
    align-items: center;
`

const StyledDivType = styled.div`
    background-color: ${props => theme.element[props.type][0]};
    border: 2px solid ${props => theme.element[props.type][1]};
    border-radius: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`


const CardPokemon = ({ PokemonData }) => {

    const pokemonName = PokemonData.name;
    const pokemonType = PokemonData.types[0].type.name;
    const pokemonImage = PokemonData.sprites.other['official-artwork'].front_default;
    
    return (
        
        <StyledDiv type={pokemonType}>
            <img src={pokemonImage} alt={`Imagen ${pokemonName}`} width="170px"/>
            <StyledH3>{pokemonName}</StyledH3>
            {/* <p>{`#00${PokemonData.id}`}</p> */}
            <StyledDivContainerType>
                {
                    PokemonData.types.map((pokemonType) => {
                        const element = pokemonType.type.name;
                        const icon = elementIcons[element];
                        return (
                            <StyledDivType type={element}>
                                <img src={icon} alt={`Icono de elemento tipo: ${element}`} />
                            </StyledDivType>
                        )
                    })
                }
            </StyledDivContainerType>
        </StyledDiv>
    );
};


export default CardPokemon;
