



import React, { useContext, useState } from 'react';
import { PostContext } from './Context';
import { useNavigate } from 'react-router-dom';

const Add: React.FC = () => {
  const postContext = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  if (!postContext) {
    throw new Error('PostContext must be used within a PostProvider');
  }

  const { posts, setPosts } = postContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
      title: title,
      body: description,
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setTitle('');
    setDescription('');
    navigate('/');
  };

  return (
    <div className="bg-custom flex items-center justify-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="mb-10">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter post description"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
