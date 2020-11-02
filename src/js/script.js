fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=1000`) 
.then(res => res.json())
.then(function (data){

    let pokemons = data.results;

    


    console.log(pokemons);
});
