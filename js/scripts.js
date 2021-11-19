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

//Replaced for loop - for each to list the name and height of the pokemons:

pokemonList.forEach(function(pokemon) {
  document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + 'm)' );

//add a conditional to highlight the tallest Pokemon in the list

if (pokemon.height >= 2)
  document.write(" Wow, that's big!");
});
