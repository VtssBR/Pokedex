const content = document.getElementById("content");
const image = document.getElementById("image");
const characterList = document.getElementById("characterList")


//Buscar Api
async function fetchApi() {
    const result = await fetch(`https://rickandmortyapi.com/api/character/?page=1`)
    /* .then((res) => res.json()) // Transformando a resposta em JSON
    .then((data) => data.results) // Buscando apenas os valores "results" do meu JSON
    .then((characters) => { */
    const characters = await result.json()
    return characters.results
}

async function addCharacters({ characters }) {
    characters.forEach((character) => {

        return characterList.innerHTML += `
        <li class="character">
            <img src="${character.image}" alt="" id="image">
            <span class="name">${character.name}</span>
                <div class="detail">
                    <span class="species">${character.species}</span>
                    <span class="${character.status}">${character.status}</span>
                </div>
        </li>`
    });
}

async function main() {
    const characters = await fetchApi()
    addCharacters({ characters })

}

main()