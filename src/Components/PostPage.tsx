import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PostContext } from './Context';

interface Comments {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comments[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setComments(response.data);
    };

    fetchComments();
  }, [id]);

  const postContext = useContext(PostContext);

  if (!postContext) {
    throw new Error('PostContext must be used within a PostProvider');
  }

  const { posts } = postContext;
  const post = posts.find(p => p.id === parseInt(id!));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    const newCommentObject = {
      id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
      postId: parseInt(id!, 10),
      name: newName,
      email: newEmail,
      body: newComment
    };

    setComments([...comments, newCommentObject]);
    setNewComment('');
    setNewName('');
    setNewEmail('');
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Comments</h2>
        {comments.filter(comment => comment.postId === parseInt(id!)).map(comment => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg">{comment.name} (<span className="text-gray-600">{comment.email}</span>)</h3>
            <p className="text-gray-700">{comment.body}</p>
          </div>
        ))}

        <form onSubmit={handleAddComment} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comment</label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your comment"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1"
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPage;
