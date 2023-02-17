import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme/theme';


const PageHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 18px 80px 18px 25px;
    background-color: ${theme.navbar.background};
    font-family: 'Kanit', sans-serif;
    font-weight: 400;

    @media (max-width: 650px) {
        flex-direction: column;
        padding: 18px 25px;
    }

    @media (max-width: 390px) {
        padding: 18px 0px;
    }
`

const Ul = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;

    & > li {
        display: inline-block;
        padding: 0px 20px;

        & > a {
            font-size: 18px;
            text-decoration: none;
            color: ${theme.navbar.color};

            &:hover {
                color: ${theme.navbar.hover};
            }
        }
    }

    @media (max-width: 650px) {
        margin: 25px 0px 10px 0px;
    }
`

const Img = styled.img`
    height: 50px;
    width: auto;
    cursor: pointer;

    &:hover {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        from {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        to {
            transform: scale(1);
        }
    }

`


const Header = () => {
    
    return (
        <PageHeader>
            <a href="/">
                <Img src='/logo_pokemon.png' alt='Pokemon Logo' />
            </a>
            <nav>
                <Ul>
                    <li><a  href="/">Home</a></li>
                    <li><a  href="#footer">Acerca de</a></li>
                    <li><a  href="#footer">Contacto</a></li>
                </Ul>
            </nav>
        </PageHeader>
  );
};

export default Header;
