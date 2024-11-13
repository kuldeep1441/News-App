

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { PostContext } from './Context';

// interface Comment {
//   id: number;
//   postId: number;
//   name: string;
//   email: string;
//   body: string;
// }

// const PostPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const postContext = useContext(PostContext);
//   const [newComment, setNewComment] = useState('');
//   const [newName, setNewName] = useState('');
//   const [newEmail, setNewEmail] = useState('');

//   // Ensure postContext is defined
//   if (!postContext) {
//     throw new Error('PostContext must be used within a PostProvider');
//   }

//   const { posts, comments, setComments } = postContext;

//   // Find the specific post by ID from the context
//   const post = posts.find((p) => p.id === parseInt(id!, 10));

//   useEffect(() => {
//     if (!post) return;

//     // Load comments from localStorage for the specific post
//     const storedComments = localStorage.getItem(`comments-${post.id}`);
//     if (storedComments) {
//       setComments(JSON.parse(storedComments));
//     } else {
//       const fetchComments = async () => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
//         const fetchedComments = response.data;
//         setComments(fetchedComments);
//         localStorage.setItem(`comments-${post.id}`, JSON.stringify(fetchedComments));
//       };
//       fetchComments();
//     }
//   }, [id, post, setComments]);

//   const handleAddComment = (e: React.FormEvent) => {
//     e.preventDefault();

//     const newCommentObject: Comment = {
//       id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
//       postId: parseInt(id!, 10),
//       name: newName,
//       email: newEmail,
//       body: newComment,
//     };

//     const updatedComments = [...comments, newCommentObject];
//     setComments(updatedComments);
//     localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

//     // Reset form fields
//     setNewComment('');
//     setNewName('');
//     setNewEmail('');
//   };

//   // Display a loading message if post is undefined
//   if (!post) {
//     return <p>Loading post...</p>;
//   }

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
//       <p className="mb-6">{post.body}</p>

//       <h3 className="text-xl font-semibold mb-4">Comments</h3>
//       <ul>
//         {comments
//           .filter((comment) => comment.postId === post.id)
//           .map((comment) => (
//             <li key={comment.id} className="mb-4">
//               <p><strong>{comment.name}</strong> ({comment.email})</p>
//               <p>{comment.body}</p>
//             </li>
//           ))}
//       </ul>

//       <form onSubmit={handleAddComment}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//           required
//           className="block w-full mb-2 p-2 border"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newEmail}
//           onChange={(e) => setNewEmail(e.target.value)}
//           required
//           className="block w-full mb-2 p-2 border"
//         />
//         <textarea
//           placeholder="Comment"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           required
//           className="block w-full mb-2 p-2 border"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Add Comment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostPage;




import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PostContext } from './Context';

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postContext = useContext(PostContext);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // Ensure postContext is defined
  if (!postContext) {
    throw new Error('PostContext must be used within a PostProvider');
  }

  const { posts, comments, setComments } = postContext;

  // Find the specific post by ID from the context
  const post = posts.find((p) => p.id === parseInt(id!, 10));

  useEffect(() => {
    if (!post) return;

    // Load comments from localStorage for the specific post
    const storedComments = localStorage.getItem(`comments-${post.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      const fetchComments = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const fetchedComments = response.data;
        setComments(fetchedComments);
        localStorage.setItem(`comments-${post.id}`, JSON.stringify(fetchedComments));
      };
      fetchComments();
    }
  }, [id, post, setComments]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    const newCommentObject: Comment = {
      id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
      postId: parseInt(id!, 10),
      name: newName,
      email: newEmail,
      body: newComment,
    };

    const updatedComments = [...comments, newCommentObject];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

    // Reset form fields
    setNewComment('');
    setNewName('');
    setNewEmail('');
  };

  // Display a loading message if post is undefined
  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Post Title */}
      <div className="">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      </div>

      {/* Post Body */}
      <div className="text-lg text-gray-700 mb-6">
        <p>{post.body}</p>
      </div>

      {/* Comments Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <ul className="space-y-4">
          {comments
            .filter((comment) => comment.postId === post.id)
            .map((comment) => (
              <li key={comment.id} className="p-4 bg-gray-100 rounded-md shadow-md">
                {/* <p className="font-semibold">{comment.name}</p>
                <p className="text-sm text-gray-500">{comment.email}</p> */}
                <p><strong>{comment.name}</strong> ({comment.email})</p>
                <p className="mt-2">{comment.body}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Add Comment Form */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Add a Comment</h3>
        <form onSubmit={handleAddComment} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <textarea
              placeholder="Comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostPage;
