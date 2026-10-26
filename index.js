//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName(pokemon) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return { name, img };
}

//1.
async function getRandomPokemon() {
  const id = Math.floor(Math.random() * 1025) + 1;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return data;
}

//2.
async function getImageAndName(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();

  const img = data.sprites.front_default;
  const name = data.name;

  return { img, name };
}

//3.
async function printImageAndName() {
  const pokemon = await getRandomPokemon();

  return `
<section>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h1>${pokemon.name}</h1>
</section>`;
}
