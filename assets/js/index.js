const content = document.getElementById("content");
const image = document.getElementById("image");
const characterList = document.getElementById("characterList")


//Buscar Api
async function fetchApi() {
    const result = await fetch(`//rickandmortyapi.com/api/character/1`)
        .then((res) => res.json()) // Transformando a resposta em JSON
        .then((data) => data.results) // Buscando apenas os valores "results" do meu JSON
        .then((characterResults) => {
            console.log(characterResults);
            return characterResults;
        });
    return result;
}


async function addCharacters() {
    const result = await fetchApi();
    characterList.innerHTML = `
        <li class="character">
            <span class="id">${result.id}</span>
            <span class="name">${result.name}</span>

            <div class="detail">
                <img src="${result.image}" alt="" id="image">
                <ul class="infos">
                    <li class="status">${result.status}</li>
                    <li class="species">${result.species}</li>
                </ul>
            </div>
        </li>`

    // content.textContent = `${JSON.stringify(result, undefined, 2)}`;

}

addCharacters()

