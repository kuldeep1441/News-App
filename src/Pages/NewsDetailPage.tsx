

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts, addComment } from '../services/api';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<any>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const posts = await fetchPosts();
        const post = posts.find((p) => p.id === parseInt(id!));
        if (post) {
          setNews(post);
          setComments(post.comments.map((comment) => comment.body));
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        await addComment(parseInt(id!), newComment); // Add the comment to the post
        setComments([...comments, newComment]); // Update local state with new comment
        setNewComment(''); // Clear the input field
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  if (!news) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="flex items-center mb-2">
        <FiArrowLeft />
      </button>
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <p>{news.body}</p>

      <h3 className="font-bold mt-4">Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleAddComment} className="bg-blue-500 text-white py-1 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsDetailPage;
