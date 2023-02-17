import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme/theme';


const PageFooter = styled.footer`

    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    max-width: 100vw;
    color:  ${theme.footer.white};
    background-color: ${theme.footer.background};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 15px 7px 0px 7px;
    margin-top: 18px;


`

const SubTitle = styled.h3`
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 3rem;
    margin: 0px;
`

const Text = styled.p`
    max-width: 600px;
    margin: 10px auto;
    line-height: 20px;
    font-size: 16px;
    color: ${theme.footer.whiteGray};
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 30px 0;
    padding: 0px;

    & > li {
      margin: 0 12px;
    }
`

const IconImg = styled.img`
    height: 30px;
    width: auto;
`

const Footer = () => {
  return (
    <PageFooter id='footer'>
        <SubTitle>Acerca de Mí</SubTitle>
        <Text>
            Soy un desarrollador web con experiencia en tecnologías como HTML, CSS, JavaScript y React.
            Me apasiona trabajar en proyectos desafiantes que me permiten poner a prueba mis habilidades.
            Siempre estoy buscando oportunidades para aprender nuevas tecnologías y seguir mejorando mis habilidades en el campo de la programación.
        </Text>
        <Ul>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/daniel-carrasco-860051213/">
                    <IconImg src="/logo_linkedin.png" alt="Logo Linkedin" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/yurehn/Pokedex-React">
                    <IconImg src="/logo_github.png" alt="Logo Github" />
                </a>
            </li>
        </Ul>
        <div>
            <p>Copyright &copy; 2023 Yurehn</p>
        </div>
    </PageFooter>
  );
};

export default Footer;
