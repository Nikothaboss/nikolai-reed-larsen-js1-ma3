// * Question 2
let url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"
const container = document.querySelector(".container")

const gameTemplate = (games) =>{
    container.innerHTML = "";
    for(game of games.results){
        console.log(game)
        if(game === games.results[8]){break}
        let newGame = `
        <ul>
            <li><h2>${game.name}</h2></li>
            <li>Rating: ${game.rating}</li>
            <li>Game tags: ${game.tags.length}</li>
        </ul>
        `
        container.innerHTML += newGame    
    };
};

fetch(url)
    .then(response => response.json())
    .then(data => gameTemplate(data))
    .catch(error => {
        console.error(error.message); 
        container.innerHTML = "Something went wrong"   
       })
    .finally(()=> container.classList.remove("spinner-border"))