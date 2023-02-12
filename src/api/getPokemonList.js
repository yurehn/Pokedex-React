
const getPokemonList = async () => {
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then( async data => {
            
            const promises = data.results.map(pokemon =>
                fetch(pokemon.url).then(response => response.json())
              );

            const pokemonsData = await Promise.all(promises);
            return pokemonsData;
        })
        .catch(error => {
            console.error(error);
        });
};

export default getPokemonList;
