fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050`) 
.then(res => res.json())
.then(function (data){

    let pokemons = data.results;
    let pokeList = document.querySelector(".pokeList")
    pokemons.forEach(pokemon => {
        const container = document.createElement('li');
                container.classList.add('pokemon');
                container.innerHTML = `
                
                ${pokemon.name}
                `
                pokeList.appendChild(container)
    });

});


var options = {
    threshold: [0.5, 0.7, 0.9]
}

function callback(entries){
    var { target, intersectionRatio } = entries[0];

    if (intersectionRatio > 0.5){

        target.querySelector(".pokelist").style.transform= "translateX(0)";
        target.querySelector(".pokelist").style.opacity = "1";

    }
    
    console.log(entries[0].intersectionRect);

}

var intObs = new IntersectionObserver(callback, options);

intObs.observe( document.querySelector("header") );