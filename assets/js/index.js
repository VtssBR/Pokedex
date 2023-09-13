const content = document.getElementById("content");
const image = document.getElementById("image");
const characterList = document.getElementById("characterList")
const loadBtn = document.getElementById("loadBtn")
let value = 1;

//Buscar Api
async function fetchApi() {
    
    const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${value}`)
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

async function loadBtnClick(ev) {
    ev.preventDefault();

    if (value < 43) {
        value += 1;
        const characters = await fetchApi();
        addCharacters({ characters });
        
    }

    if (value == 42) {
        loadBtn.removeEventListener('click', loadBtnClick());
        loadBtn.remove(); 
    }
}

loadBtn.addEventListener('click', loadBtnClick)

main()
