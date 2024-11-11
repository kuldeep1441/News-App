

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, addPost, deletePost, updatePost, Post } from '../services/api';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newNews, setNewNews] = useState('');
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedNews, setEditedNews] = useState('');

  
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    loadPosts();
  }, []);

  // Add a new post
  const handleAddPost = async () => {
    if (newTitle && newNews) {
      try {
        const newPost = await addPost(newTitle, newNews); // news is now 'body' in the API
        setPosts([newPost, ...posts]); // Add the new post to the beginning of the list
        setNewTitle('');
        setNewNews('');
        setShowAddForm(false);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  // Delete a post
  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post.id !== id)); // Remove the post from the list immediately
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Start editing a post
  const handleEditPost = (post: Post) => {
    setEditingPostId(post.id);
    setEditedTitle(post.title);
    setEditedNews(post.body);
  };

  // Save the updated post
  const handleSavePost = async () => {
    if (editedTitle && editedNews && editingPostId !== null) {
      try {
        const updatedPost = await updatePost(editingPostId, editedTitle, editedNews);
        
        // Update the post in the state
        setPosts(posts.map(post =>
          post.id === editingPostId
            ? { ...post, title: updatedPost.title, body: updatedPost.body }
            : post
        ));
        
        setEditingPostId(null); // Exit edit mode
        setEditedTitle('');
        setEditedNews('');
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          Add
        </button>
      </div>

      {showAddForm && (
        <div className="mb-4 p-4 border rounded bg-gray-100">
          <input
            type="text"
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            className="w-full mb-2 p-2 border rounded"
            placeholder="News content"
            value={newNews}
            onChange={(e) => setNewNews(e.target.value)}
          ></textarea>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleAddPost}
          >
            Submit
          </button>
        </div>
      )}

      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-4 p-4 border rounded">
            {editingPostId === post.id ? (
              <div>
                <input
                  type="text"
                  className="w-full mb-2 p-2 border rounded"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  className="w-full mb-2 p-2 border rounded"
                  value={editedNews}
                  onChange={(e) => setEditedNews(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSavePost}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                  onClick={() => setEditingPostId(null)} // Exit edit mode
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold">{post.title}</h2>
                  <p>{post.body}</p>
              <div className='flex justify-between'>
                <Link to={`/posts/${post.id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded flex">
                    View
                  </button>
                  </Link>
              <div className=''>
                <button
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
                <button
                  className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded ml-2"
                  onClick={() => handleEditPost(post)} // Start editing
                >
                  Edit
                  </button>
                    </div>
                    </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
