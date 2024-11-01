'use client'

import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching Posts:', error);
        setError(error.message);
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
