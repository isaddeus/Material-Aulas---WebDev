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
    document.querySelector("#postForm").addEventListener("submit", addPost) // POR QUE 'querySelector'? getElementById é mais antigo e só funciona com ID, enquanto querySelector é mais moderno e versátil, funcionando com qualquer seletor CSS.
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
        date: new Date().toLocaleString() 

        // NEW: O operador 'new' é usado para criar uma nova instância de um objeto. 
        // Aqui, estamos criando um novo objeto do tipo 'Date', que representa a data e hora atuais no momento em que o código é executado.

        // toLocaleString: Este método converte a data e hora para uma string no formato local do usuário. 
        // Isso significa que ele ajusta o formato de exibição (como dia/mês/ano ou mês/dia/ano) e o horário (AM/PM ou 24 horas) 
        // com base nas configurações de idioma e região
    }

    posts.unshift(novoPost) // UNSHIFT: Adiciona o novo post no inicio do array

    mostrarPosts()
}

// READ,

function mostrarPosts(){
// PASSO A PASSO: 

    // 1- Pegar o elemento onde os tweets serão inseridos
    const listaPosts = document.querySelector("#postList") // FUNCIONA COM BASE NOS PRFEFIXOS DO CSS (# = ID, . = CLASS, etc)
    listaPosts.innerHTML = "";

    // 2- Percorrer o array (meio que uma lista do python ) pegando as informações, criando um tweet com cada uma delas
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