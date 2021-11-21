//Pokemon List

//put pokemonList in IIFE

let pokemonRepository = (function () {
  let repository = [
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

    //adds new data to the pokemonList array
  function add(pokemon) {
      repository.push(pokemon);
  }

  //returns the pokemonList array
  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button =  document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
