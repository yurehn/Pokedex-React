import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: 100vw;
    padding-top: 15px;
    color: #fff;
    background-color: #292828;
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0px 7px;
`
const StyledH3 = styled.h3`
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 3rem;
    margin: 0px;
`
const StyledP = styled.p`
    max-width: 600px;
    margin: 10px auto;
    line-height: 20px;
    font-size: 16px;
    color: #cacdd2
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 30px 0;
    padding: 0px;

    & > li {
      margin: 0 12px;

      & > a {
        text-decoration: none;
        color: #3fb8e0;

        &:hover {
            color: #0e7d99;
        }
      }
    }
`
const StyledImg = styled.img`
    height: 30px;
    width: auto;
`

const Footer = () => {
  return (
    <StyledFooter>
        <StyledDiv>
            <StyledH3>Acerca de Mí</StyledH3>
            <StyledP>
                Soy un desarrollador web con experiencia en tecnologías como HTML, CSS, JavaScript y React.
                Me gusta trabajar en proyectos desafiantes y me esfuerzo por crear soluciones efectivas.
            </StyledP>
            <StyledUl>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/daniel-carrasco-860051213/">
                        <StyledImg src="/logo_linkedin.png" alt="Logo Linkedin" title="Logo Linkedin" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/yurehn">
                        <StyledImg src="/logo_github.png" alt="Logo Github" title="Logo Github" />
                    </a>
                </li>
            </StyledUl>
            <div>
                <p>Copyright &copy; 2023 Yurehn</p>
            </div>
        </StyledDiv>
    </StyledFooter>
  );
};

export default Footer;
