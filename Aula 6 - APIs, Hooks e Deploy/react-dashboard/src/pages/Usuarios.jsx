import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Usuários</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {usuarios.map((user) => (
          <Link
            key={user.id}
            to={`/usuario/${user.id}/posts`}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}