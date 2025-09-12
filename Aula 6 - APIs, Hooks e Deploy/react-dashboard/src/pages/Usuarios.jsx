import { data } from "react-router-dom";
import { useEffect, useState} from "react";



export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([]); // useState é usado para criar estado em componentes funcionais

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users") // FETCH é assíncrono, ou seja, não bloqueia o código
  .then(response => response.json()) // .then() é usado para lidar com a resposta da requisição
  .then(data => setUsuarios(data)) // .then() é usado para lidar com os dados retornados
  .catch(erro => console.log(erro)) // .catch() é usado para lidar com erros na requisição
  .finally(console.log("Carregamento finalizado")) // .finally() é usado para executar código após a requisição, independentemente do resultado
  }, [])

    // ; separa comandos em uma mesma linha, ou seja, é usado para separar instruções (acaba quebrando o processo)

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(pegaItem => (
        <div key={pegaItem.id}>
          <p>{pegaItem.name}</p>
          <p>{pegaItem.email}</p>
        </div>
      ))}
      <p className="mt-2 text-gray-600">Página de usuários.</p>
    </div>
  );
}
