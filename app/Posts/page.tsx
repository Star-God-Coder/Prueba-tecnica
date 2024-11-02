'use client';

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

function Posts() {
    // Inicializar el estado posts con un tipo explícito
    const [posts, setPosts] = useState<Post[]>([]); // Aquí especificamos que es un array de Post
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Puedes definir error como string o null

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data: Post[] = await response.json(); // Aquí especificamos que data es un array de Post
        setPosts(data.slice(0, 10));
      } catch (error) {
        const err = error as Error;
        console.error(err.message);
        setError(err.message); // Asegúrate de establecer el error en el estado si lo deseas mostrar
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
        <div className="px-4 py-12 flex flex-col justify-center items-center">
          <h2 className="text-center text-3xl font-bold my-8">Otros Artículos</h2>
          <div className="flex flex-col lg:flex-row flex-wrap justify-center">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="m-4 p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center max-w-xs">
                <h3 className="text-2xl font-semibold my-4">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
    );
}

export default Posts;
