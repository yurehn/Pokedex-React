import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme/theme';

const elementIcons = {
    normal: '/element_icons/normal.svg',
    fighting: '/element_icons/fighting.svg',
    flying: '/element_icons/flying.svg',
    poison: '/element_icons/poison.svg',
    ground: '/element_icons/ground.svg',
    rock: '/element_icons/rock.svg',
    bug: '/element_icons/bug.svg',
    ghost: '/element_icons/ghost.svg',
    steel: '/element_icons/steel.svg',
    fire: '/element_icons/fire.svg',
    water: '/element_icons/water.svg',
    grass: '/element_icons/grass.svg',
    electric: '/element_icons/electric.svg',
    psychic: '/element_icons/psychic.svg',
    ice: '/element_icons/ice.svg',
    dragon: '/element_icons/dragon.svg',
    dark: '/element_icons/dark.svg',
    fairy: '/element_icons/fairy.svg',
    shadow: '/element_icons/ghost.svg'
  };

const StyledDiv = styled.div`
    background-color: ${props => theme.card[props.type][0]};
    border: 2px solid ${props => theme.card[props.type][1]};
    
    font-family: 'Kanit', sans-serif;

    position: relative;
    width: 210px;
    min-height: 300px;
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
        margin: 15px 0px 8px 0px;
    }
`

const StyledH3 = styled.h3`
    text-transform: capitalize;
    margin: 0px;

    font-size: 21px; 
    font-weight: 500;
    letter-spacing: 0.5px;

    text-align: center;
`

const StyledDivContainerType = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px 0px;

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
const StyledDivNum = styled.div`

    position: absolute;
    top: -15px;
    background-color: #d3d3d3  ;
    border: 1px solid #0091c9;
    padding: 2px 8px;
    border-radius: 8px;

    font-weight: 400;

    p {
        margin: 0px;
    }  
`  

const StyledDiviImg = styled.div`
    width: 170px;
    min-height: 170px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-weight: 500;
    color: #541313;
` 
const CardPokemon = ({ PokemonData }) => {

    const pokemonName = PokemonData.name;
    const pokemonType = PokemonData.types[0].type.name;
    const pokemonImage = PokemonData.sprites.other['official-artwork'].front_default;
    
    return (
        
        <StyledDiv type={pokemonType}>
            <StyledDivNum>
                <p>{`#${PokemonData.id.toString().padStart(3, "0")}`}</p>
            </StyledDivNum>
            
            {
                pokemonImage ?
                <img src={pokemonImage} alt={`Imagen ${pokemonName}`} width="170px"/>
                :
                <StyledDiviImg>
                    <p>404 Not Found</p>
                </StyledDiviImg>  
            }

            <StyledH3>{pokemonName}</StyledH3>
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
