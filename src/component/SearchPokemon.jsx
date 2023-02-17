import React, {useState} from 'react';
import styled from 'styled-components';


const Container  = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 45px 0px;
`

const SearchContainer = styled.div`
	display: flex;
 	align-items: center;
 	position: relative;
	
 	max-width: 265px;
	width: 100%;
	margin: 0px 10px;
`

const SearchInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 16px 0 2.5rem;

	border: 2px solid ${props => props.parameter ? 'red' : '#0e743078'};
	border-radius: 8px;
	background-color: #ebebeb;
	
	color: #0d0c22;
	transition: .3s ease;

	&::placeholder {
		color: #9e9ea7;
	}

	&:focus, &:hover {
		outline: none;
		border-color:  ${props => props.parameter ? 'red' : '#14a098'};
		background-color: #fff;
	}

	animation: ${props => props.parameter ? 'shake 0.5s' : 'none'};

	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-10px);
		}
		50% {
			transform: translateX(10px);
		}
		75% {
			transform: translateX(-10px);
		}
		100% {
			transform: translateX(0);
		}
	}
`

const SearchIcon = styled.img`
	position: absolute;
	left: 16px;
	width: 17px;
	height: 17px;
`

const ErrorText = styled.p`
	color: red;
	margin: 3px 0px 0px 0px;
	font-size: 14px;
	text-align: center;
`

const SearchPokemon = ({ setValueSearch, searchError, setSearchError }) => {

	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');


	const handleKeyDown = (event) => {
		setSearchError(false)
		setShowError(false);


		if (event.key === 'Enter' && event.target.value.trim() !== '') {
			const inputString = event.target.value.trim().toLowerCase();

			if (/^[a-z\s]*$/.test(inputString)) {
				setValueSearch(inputString);
			
			} else {
				setShowError(true);
				setErrorMessage('Ingrese solo letras');
			}
		}
	  };

	return (
		<Container>
			<SearchContainer>
				<SearchIcon src="/search_icon.svg" alt="Lupa"/>
				<SearchInput
					placeholder='Buscar'
					type="search"
					onKeyDown={handleKeyDown}
					parameter={showError || searchError}
				/>
			</SearchContainer>
			{ showError && <ErrorText>{errorMessage}</ErrorText> }
			{ searchError && <ErrorText>{'No se ha encontrado el Pokémon'}</ErrorText> }
		</Container>
	);
};

export default SearchPokemon;
