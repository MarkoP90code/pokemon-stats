

const allValidPokemon = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const inputPokemon = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const hiddenContainer = document.getElementById("container-bottom");
const hiddenImg = document.getElementById("sprite");
const topContainer = document.getElementById("container-top");
const displayStats = document.querySelectorAll(".pokemon-characteristics");


console.log(displayStats)

const fetchData = async () => {
    try {
    const res = await fetch(allValidPokemon + inputPokemon.value.toLowerCase());    //Ovde sam samo string napravio jer ova adresa allValidPokemon + ime ili id daju adresu sa koje mogu da pozivam podatke koji mi trebaju. Ako samo uradim allValidPokemon dobijem spisak svih pokemona ali tu nemam sve informacije koje mi trebaju.
    const data = await res.json();
    console.log(data)
    // const res1 = await fetch(allValidPokemon);
    // const data1 = await res1.json();
    // console.log(data1)
    inputPokemon.value = "";
    hiddenContainer.style.visibility = "visible";
    hiddenImg.style.visibility = "visible"
    topContainer.style.marginTop = "40px";
    findPokemon(data);
    } catch(err) {                  //Ovde samo mogao samo catch da stavim bez zagrada i bez err jel ne koristim taj parametar.
        alert("Pokémon not found");
        hiddenContainer.style.visibility = "hidden";
        hiddenImg.style.visibility = "hidden"
        topContainer.style.marginTop = "40%";
    }
}



const findPokemon = (pokemon) => {
    const {name, id, weight, height, stats, types, sprites} = pokemon;      //Destructuring.
    
    displayStats[0].textContent = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();  //Ovo drugo slice posti ima samo (1) radi slice od 1 do kraja stringa.
    displayStats[1].textContent = id;
    displayStats[2].textContent = weight;
    displayStats[3].textContent = height;

    displayStats[4].innerHTML = types.map((type) => {
        return `<spam id="pok-type-dis">${type.type.name.toUpperCase()}</spam>`    //Ovde obratiti paznju na ovo type.type.name. Prvo type je prvi clan array-a types a drugo type je property key unutar objekta. Name je property value.
    }).join("")

    displayStats[5].textContent = stats[0].base_stat;
    displayStats[6].textContent = stats[1].base_stat;
    displayStats[7].textContent = stats[2].base_stat;
    displayStats[8].textContent = stats[3].base_stat;
    displayStats[9].textContent = stats[4].base_stat;
    displayStats[10].textContent = stats[5].base_stat;

    document.getElementById("sprite").src = sprites.front_default;
    
}

searchBtn.addEventListener("click", fetchData);
inputPokemon.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchData();
    }
});

console.log("HELLO");

// const pokemonTypeSymbol = (type) => {
//     if (type === "bug") {
        
//         return "🐞"
//     } 
//     if (type === "dark") {
//         return "🌙"
//     } 
//     if (type === "dragon") {
//         return "🐲"
//     } 
//     if (type === "electric") {
//         document.getElementById("types").style.backgroundColor = "yellow";
//         return "⚡"
//     } 
//     if (type === "fairy") {
//         return "✨"
//     } 
//     if (type === "fighting") {
//         return "🥊"
//     } 
//     if (type === "fire") {
//         return "🔥"
//     } 
//     if (type === "flying") {
//         return "🌪️"
//     } 
//     if (type === "ghost") {
//         return "👻"
//     } 
//     if (type === "grass") {
//         return "🌿"
//     } 
//     if (type === "ground") {
//         return "🗿"
//     } 
//     if (type === "ice") {
//         return "❄️"
//     } 
//     if (type === "normal") {
//         return ""
//     } 
//     if (type === "poison") {
//         return "☠️"
//     } 
//     if (type === "psychic") {
//         return "🧠"
//     } 
//     if (type === "rock") {
//         return "⛰️"
//     } 
//     if (type === "steel") {
//         return "🛡️"
//     } 
//     if (type === "water") {
//         return "💧"
//     } 

// }