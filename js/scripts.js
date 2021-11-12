//Pokemon List
let pokemonList = [
  {
    name: 'Venusaur',
    height: 2,
    types: ['grass', 'poison']
  },
  {
    name: 'Beedrill',
    height: 1,
    types: ['bug', 'poison']
  },
  {
    name: 'Butterfree',
    height: 1.1,
    types: ['bug', 'flying']
  },
  {
    name: 'Sandshrew',
    height: 0.6,
    types: ['ground']
  },
  {
    name: 'Nidoran',
    height: 0.4,
    types: ['poison']
  }
];

//Create a for loop to list the name and height of the pokemons:

for (let i = 0; i < pokemonList.length; i++) {
  document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm)');

//add a conditional to highlight the tallest Pokemon in the list

  if (pokemonList[i].height >= 2) {
    document.write(" Wow, that's big!");
  }
}
