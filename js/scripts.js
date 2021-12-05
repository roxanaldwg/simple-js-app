//Pokemon List

//put pokemonList in IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //returns the pokemonList array
  function getAll() {
    return pokemonList;
  }

  //adds new data to the pokemonList array
  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button =  document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class', 'btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', 'pokedexModal');
    listpokemon.appendChild(button);
    listpokemon.classList.add('group-list-item');
    pokemonList.appendChild(listpokemon);

    //add addEventListener to button
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  //create Modal to show details of pokemons
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showPokedexModal(pokemon);
    });
  }

  // Fetch basic pokemon info from API:
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //get details from API
  function loadDetails(pokemon) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showPokedexModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('modal-title');
    modalTitle.empty();
    modalBody.empty();

    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', pokemon.imageUrl);

    let heightElement = $('<p>' + 'Height : ' + pokemon.height + ' m' + '</p>');
    let typesString = 'Type<span class = "notCapitalised">(s)</span>: ';
    for (let i = 0; i < pokemon.types.length; i++) {
    typesString = typesString + pokemon.types[i].type.name;
    if (i != pokemon.types.length - 1) typesString = typesString + ' & ';
    }
    let typesElement = $("<p>" + typesString + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
  };

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
