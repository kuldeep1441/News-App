import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PostContext } from './Context';

const MainComponent: React.FC = () => {
  const postContext = useContext(PostContext);

  if (!postContext) {
    throw new Error('PostContext must be used within a PostProvider');
  }

  const { posts, setPosts ,addposts,setAddPosts} = postContext;

  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      if(addposts.length == 0){
        setPosts(response.data);

      }
      else{
        setPosts(response.data)
        setPosts([...posts,...addposts])
        
      }
      
    };

    fetchPosts();
  }, [setPosts]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Latest News</h2>
      <div className="flex flex-col space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
              <div className="flex justify-between items-center">
                <Link to={`/post/${post.id}`}>
                  <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:translate-y-1"
                  >
                    Read More
                  </button>
                </Link>
                <div>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow mr-2 transition duration-200 ease-in-out transform hover:translate-y-1">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition duration-200 ease-in-out transform hover:translate-y-1">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
