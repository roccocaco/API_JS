// Seletores
const divContainer = document.getElementById("container");
const idTitle = document.getElementById("id-title");
const idBody = document.getElementById("id-body");

// Variaveis
let resultado =[];

// Funções
const fetchApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const req = await fetch(url);
    const res = await req.json();

    return res;
};

// Eventos
window.addEventListener('load', async () => {
    resultado = await fetchApi();

    resultado.map((e) => 
        divContainer.innerHTML += `
            <h3>${e.title}</h3>
            <p>${e.body}</p>
    
    `    
    );
})
