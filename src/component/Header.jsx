import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme/theme';


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 80px 18px 25px;
    background-color: ${theme.navbar.background};
`

const StyledUl = styled.ul`
  list-style: none;

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
`

const StyledImg = styled.img`
    height: 50px;
    width: auto;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledImg src='/logo_pokemon.png' alt='Pokemon Logo' />
            <nav>
                <StyledUl>
                    <li><a  href="/">Home</a></li>
                    <li><a  href="#footer">Acerca de</a></li>
                    <li><a  href="#footer">Contacto</a></li>
                </StyledUl>
            </nav>
        </StyledHeader>
  );
};

export default Header;
