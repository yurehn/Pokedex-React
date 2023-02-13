

const getPokemonList = async (currentPage) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPage - 1) * 20}`)
        .then(response => response.json())
        .then( async data => {

            const promises = data.results.map(pokemon =>
                fetch(pokemon.url).then(response => response.json())
              );

            const pokemonsData = await Promise.all(promises);

            const totalPages = Math.ceil(data.count / 20);
            return {pokemonsData, totalPages};

        })
        .catch(error => {
            console.error(error);
        });
};

export default getPokemonList;
