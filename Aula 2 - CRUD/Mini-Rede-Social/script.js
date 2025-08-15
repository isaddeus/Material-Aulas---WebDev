// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];


// ------------ OBJETOS --------------


// const pessoa = {
//     nome: "isabela",
//     idade: 18,
//     Empresas: [],
//     isAdmin: true
// }

// console.log(pessoa.nome)
// console.log(pessoa[idade])


// ------ ---------- CRUD -----------------------------

// Ao carregar a pagina, executa as linhas abaixo:

window.onload = function(){
    mostrarPosts();

    // aqui, adicionamos o event listener pra receber o envio do formulario no CREATE
    document.querySelector("#postForm").addEventListener("submit", addPost)
} 

// ---------- CREATE ----------

// PASSO A PASSO: 
// 1- Ouvir o evento de envio de formulario
function addPost(infosDoEvento){
    infosDoEvento.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString() // NEW: Cria um novo objeto do tipo date ||| toLocaleString: Localiza de onde voce ta postando e deixa no formato regional 
    }

    posts.unshift(novoPost) // UNSHIFT: Adiciona no começo do código

    mostrarPosts()
}

// READ,

function mostrarPosts(){
// PASSO A PASSO: 

    // 1- Pegar o elemento onde os tweets serão inseridos
    const listaPosts = document.querySelector("#postlist") // FUNCIONA COM BASE NOS SELETORES DO CSS ( . // #....)
    listaPosts.innerHTML = ""

    // 2- Percorrer o array pegando as informações, criando um tweet com cada uma delas
    posts.forEach( pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <h2> ${pegaItem.text} </h2>
            <img src="${pegaItem.image}"/>
        `

    // 3- Inserir no HTML
        listaPosts.append(cardPost)
    })

}




// UPDATE,
function editarPosts(){}
// DELETE
function deletarPosts(){}