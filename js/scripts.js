//Pokemon List

//put pokemonList in IIFE

let pokemonRepository = (function () {
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
  //returns the pokemonList array
  function getAll() {
    return pokemonList;
  }

    //adds new data to the pokemonList array
  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };

})();

//Replaced for loop - for each to list the name and height of the pokemons:

pokemonRepository.getAll().forEach(function(pokemon) {
//define data to new variables using getAll()
  let pokemonName = pokemon.name
  let pokemonHeight = pokemon.height
  let pokemonType = pokemon.types

//Write to the document
  document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + 'm)' );

//add a conditional to highlight the tallest Pokemon in the list

  if (pokemon.height >= 2)
  document.write(" Wow, that's big!");
});
