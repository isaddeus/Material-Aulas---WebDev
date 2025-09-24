import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PostUsuario() {

    const Parametros = useParams();

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Parametros.id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, [Parametros.id]);

    return (
        <>
            {posts.map(pegaItem => (
                <div className="bg-pink-300 text-white mb-4 p-2.5 rounded-2xl" key={pegaItem.id}>
                    <p>{pegaItem.title}</p>
                </div>
            ))}
        </>
    )
    
}