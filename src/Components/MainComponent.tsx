

// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { PostContext } from './Context';

// const MainComponent: React.FC = () => {
//   const postContext = useContext(PostContext);

//   if (!postContext) {
//     throw new Error('PostContext must be used within a PostProvider');
//   }

//   const { posts } = postContext;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col space-y-6">
//         {posts.map(post => (
//           <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold mb-3 text-gray-800">{post.title}</h3>
//               <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
//               <div className="flex justify-between items-center">
//                 <Link to={`/post/${post.id}`}>
//                   <button
//                     className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:translate-y-1"
//                   >
//                     Read More
//                   </button>
//                 </Link>
//                 <div>
//                   <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow mr-2 transition duration-200 ease-in-out transform hover:translate-y-1">
//                     Edit
//                   </button>
//                   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition duration-200 ease-in-out transform hover:translate-y-1">
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainComponent;



// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { PostContext } from './Context';

// const MainComponent: React.FC = () => {
//   const postContext = useContext(PostContext);

//   if (!postContext) {
//     throw new Error('PostContext must be used within a PostProvider');
//   }

//   const { posts, setPosts } = postContext;

//   useEffect(() => {
//     // Load posts from localStorage if available
//     const storedPosts = localStorage.getItem('posts');
//     if (storedPosts) {
//       setPosts(JSON.parse(storedPosts));
//     }
//   }, [setPosts]);

//   const handleDeletePost = (postId: number) => {
//     // Filter out the post to delete
//     const updatedPosts = posts.filter(post => post.id !== postId);
    
//     // Update PostContext and localStorage
//     setPosts(updatedPosts);
//     localStorage.setItem('posts', JSON.stringify(updatedPosts));
//   };

//   const handleUpdatePost = (postId: number) => {
//     // Find the post to update
//     const postToUpdate = posts.find(post => post.id === postId);
//     if (postToUpdate) {
//       // Update the post's title (for example, append ' - Updated' to the title)
//       const updatedPost = { ...postToUpdate, title: postToUpdate.title + ' - Updated' };
      
//       // Update PostContext and localStorage
//       const updatedPosts = posts.map(post => (post.id === postId ? updatedPost : post));
//       setPosts(updatedPosts);
//       localStorage.setItem('posts', JSON.stringify(updatedPosts));
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col space-y-6">
//         {posts.map(post => (
//           <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold mb-3 text-gray-800">{post.title}</h3>
//               <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
//               <div className="flex justify-between items-center">
//                 <Link to={`/post/${post.id}`}>
//                   <button
//                     className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:translate-y-1"
//                   >
//                     Read More
//                   </button>
//                 </Link>
//                 <div>
//                   <button
//                     onClick={() => handleUpdatePost(post.id)}
//                     className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow mr-2 transition duration-200 ease-in-out transform hover:translate-y-1"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeletePost(post.id)}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition duration-200 ease-in-out transform hover:translate-y-1"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainComponent;




import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from './Context';

const MainComponent: React.FC = () => {
  const postContext = useContext(PostContext);

  if (!postContext) {
    throw new Error('PostContext must be used within a PostProvider');
  }

  const { posts, setPosts } = postContext;
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedBody, setUpdatedBody] = useState('');

  useEffect(() => {
    // Load posts from localStorage if available
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, [setPosts]);

  const handleDeletePost = (postId: number) => {
    // Filter out the post to delete
    const updatedPosts = posts.filter(post => post.id !== postId);
    
    // Update PostContext and localStorage
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleUpdatePost = (postId: number) => {
    const postToEdit = posts.find(post => post.id === postId);
    if (postToEdit) {
      setCurrentPost(postToEdit);
      setUpdatedTitle(postToEdit.title);
      setUpdatedBody(postToEdit.body);
      setIsEditing(true);
    }
  };

  const handleSaveChanges = () => {
    const updatedPost = { ...currentPost, title: updatedTitle, body: updatedBody };
    
    // Update posts in PostContext and localStorage
    const updatedPosts = posts.map(post => (post.id === currentPost.id ? updatedPost : post));
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Close the edit form
    setIsEditing(false);
    setCurrentPost(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentPost(null);
  };

  return (
    <div className="container mx-auto p-4">
      {isEditing ? (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="block w-full mb-4 p-2 border"
            placeholder="Title"
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
            className="block w-full mb-4 p-2 border"
            placeholder="Body"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSaveChanges}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                    <button
                      onClick={() => handleUpdatePost(post.id)}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow mr-2 transition duration-200 ease-in-out transform hover:translate-y-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition duration-200 ease-in-out transform hover:translate-y-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainComponent;
