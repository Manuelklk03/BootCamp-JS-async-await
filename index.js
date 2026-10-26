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

//4.
async function getRandomDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();

  return data.message;
}

//6.
async function printPugVsPikachu() {
  const response = await fetch("https://dog.ceo/api/breed/pug/images/random");
  const dog = await response.json();

  const pikachu = await getImageAndName("pikachu");

  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Pug VS Pikachu</h2>
        <img src="${dog.message}" alt="Pug">
        <h2>VS</h2>
        <img src="${pikachu.img}" alt="Pikachu">
    `;

  document.body.appendChild(section);
}

//7.
async function getRandomCharacter() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  const id = Math.floor(Math.random() * data.info.count) + 1;

  const characterResponse = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const character = await characterResponse.json();

  return character;
}

//8.
async function getRandomCharacterInfo() {
  const character = await getRandomCharacter();

  const img = character.image;
  const name = character.name;
  const episodes = character.episode;

  const response = await fetch(episodes[0]);
  const episodeData = await response.json();

  const firstEpisode = episodeData.name;
  const dateEpisode = episodeData.air_date;

  return { img, name, episodes, firstEpisode, dateEpisode };
}

//9.
async function printRandomCharacterInfo() {
  const character = await getRandomCharacterInfo();

  const section = document.createElement("section");

  const episodes = character.episodes.map((url) => url.split("/").pop());

  section.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.img}" alt="${character.name}">
        <p>Episodios: ${episodes.join(", ")}</p>
        <p>Primer episodio: ${character.firstEpisode}</p>
        <p>Fecha de estreno: ${character.dateEpisode}</p>
    `;

  document.body.appendChild(section);
}

//Para que aparezcan el 6 y el 9
document.addEventListener("DOMContentLoaded", () => {
  printPugVsPikachu();
  printRandomCharacterInfo();
});
