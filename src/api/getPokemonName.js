

const getPokemonName = async (valueSearch) => {

    return await fetch(`https://pokeapi.co/api/v2/pokemon/${valueSearch}`)
        .then(response => response.json())
        .then( data => {
            return data;
        })
        .catch(error => {
            console.log('error');
        });
};

export default getPokemonName;
