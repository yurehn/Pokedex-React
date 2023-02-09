import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 80px 18px 25px;
    background-color: rgba(204, 231, 167, 0.61);
`

const StyledUl = styled.ul`
  list-style: none;

  & > li {
    display: inline-block;
    padding: 0px 20px;

    & > a {
        font-size: 18px;
        text-decoration: none;
        color: #3fb8e0;

        &:hover {
            color: #0e7d99;
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
            <StyledImg src='/logo_pokemon.png' alt='Pokemon Logo' title='Pokemon Logo'/>
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
