//#TASK6: Use axios to retrieve elements from a json object via API

const axios = require("axios");

async function getPokemon() {
  const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");

  return pokemon.data.results.map((pokemonObject) => pokemonObject.name);
}

getPokemon()
  .then((result) => console.log(result))
  .catch((err) => console.log("GET request failed:", err.message));
