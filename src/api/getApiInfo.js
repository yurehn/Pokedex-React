
const getApiInfo = async () => {
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => {
            console.error(error);
        });
};

export default getApiInfo;
