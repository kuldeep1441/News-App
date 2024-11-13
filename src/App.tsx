// // // // // // import React, { useState } from 'react';
// // // // // // import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // // // // // import Add from './Components/Add';
// // // // // // import Home from './Components/Home';
// // // // // // import { Post, PostContext } from './Components/Context';
// // // // // // import PostPage from './Components/PostPage';

// // // // // // const router = createBrowserRouter([
// // // // // //   {
// // // // // //     path: "/",
// // // // // //     element: <Home />,
// // // // // //   },
// // // // // //   {
// // // // // //     path: "/add",
// // // // // //     element: <Add />,
// // // // // //   },
// // // // // //   {
// // // // // //     path: "/post/:id",
// // // // // //     element: <PostPage />,
// // // // // //   }
// // // // // // ]);

// // // // // // const App: React.FC = () => {
// // // // // //   const [posts, setPosts] = useState<Post[]>([]);
// // // // // //   const [addposts, setAddPosts] = useState<Post[]>([]);

// // // // // //   return (
// // // // // //     <PostContext.Provider value={{ posts, setPosts, addposts, setAddPosts }}>
// // // // // //       <RouterProvider router={router} />
// // // // // //     </PostContext.Provider>
// // // // // //   );
// // // // // // }

// // // // // // export default App;



// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // // // // import Add from './Components/Add';
// // // // // import Home from './Components/Home';
// // // // // import { Post, PostContext } from './Components/Context';
// // // // // import PostPage from './Components/PostPage';

// // // // // const router = createBrowserRouter([
// // // // //   {
// // // // //     path: "/",
// // // // //     element: <Home />,
// // // // //   },
// // // // //   {
// // // // //     path: "/add",
// // // // //     element: <Add />,
// // // // //   },
// // // // //   {
// // // // //     path: "/post/:id",
// // // // //     element: <PostPage />,
// // // // //   }
// // // // // ]);

// // // // // const App: React.FC = () => {
// // // // //   const [posts, setPosts] = useState<Post[]>(() => {
// // // // //     const storedPosts = localStorage.getItem('posts');
// // // // //     return storedPosts ? JSON.parse(storedPosts) : [];
// // // // //   });
// // // // //   const [addposts, setAddPosts] = useState<Post[]>(() => {
// // // // //     const storedAddPosts = localStorage.getItem('addposts');
// // // // //     return storedAddPosts ? JSON.parse(storedAddPosts) : [];
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     localStorage.setItem('posts', JSON.stringify(posts));
// // // // //   }, [posts]);

// // // // //   useEffect(() => {
// // // // //     localStorage.setItem('addposts', JSON.stringify(addposts));
// // // // //   }, [addposts]);

// // // // //   return (
// // // // //     <PostContext.Provider value={{ posts, setPosts, addposts, setAddPosts }}>
// // // // //       <RouterProvider router={router} />
// // // // //     </PostContext.Provider>
// // // // //   );
// // // // // };

// // // // // export default App;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // import Add from './Components/Add';
// // // // import Home from './Components/Home';
// // // // import { Post, PostContext } from './Components/Context';
// // // // import PostPage from './Components/PostPage';

// // // // const router = createBrowserRouter([
// // // //   {
// // // //     path: "/",
// // // //     element: <Home />,
// // // //   },
// // // //   {
// // // //     path: "/add",
// // // //     element: <Add />,
// // // //   },
// // // //   {
// // // //     path: "/post/:id",
// // // //     element: <PostPage />,
// // // //   }
// // // // ]);

// // // // const App: React.FC = () => {
// // // //   const [posts, setPosts] = useState<Post[]>(() => {
// // // //     const savedPosts = localStorage.getItem('posts');
// // // //     return savedPosts ? JSON.parse(savedPosts) : [];
// // // //   });

// // // //   const [addposts, setAddPosts] = useState<Post[]>(() => {
// // // //     const savedAddPosts = localStorage.getItem('addposts');
// // // //     return savedAddPosts ? JSON.parse(savedAddPosts) : [];
// // // //   });

// // // //   useEffect(() => {
// // // //     if (posts.length === 0) {
// // // //       const fetchPosts = async () => {
// // // //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
// // // //         const fetchedPosts = response.data;
// // // //         setPosts(fetchedPosts);
// // // //         localStorage.setItem('posts', JSON.stringify(fetchedPosts));
// // // //       };
// // // //       fetchPosts();
// // // //     }
// // // //   }, [posts]);

// // // //   useEffect(() => {
// // // //     localStorage.setItem('posts', JSON.stringify(posts));
// // // //     localStorage.setItem('addposts', JSON.stringify(addposts));
// // // //   }, [posts, addposts]);

// // // //   return (
// // // //     <PostContext.Provider value={{ posts, setPosts, addposts, setAddPosts }}>
// // // //       <RouterProvider router={router} />
// // // //     </PostContext.Provider>
// // // //   );
// // // // };

// // // // export default App;



// // // import React, { useState, useEffect } from 'react';
// // // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // // import axios from 'axios';

// // // import Add from './Components/Add';
// // // import Home from './Components/Home';
// // // import { Post, PostContext } from './Components/Context';
// // // import PostPage from './Components/PostPage';

// // // const router = createBrowserRouter([
// // //   {
// // //     path: "/",
// // //     element: <Home />,
// // //   },
// // //   {
// // //     path: "/add",
// // //     element: <Add />,
// // //   },
// // //   {
// // //     path: "/post/:id",
// // //     element: <PostPage />,
// // //   }
// // // ]);

// // // const App: React.FC = () => {
// // //   const [posts, setPosts] = useState<Post[]>(() => {
// // //     const savedPosts = localStorage.getItem('posts');
// // //     return savedPosts ? JSON.parse(savedPosts) : [];
// // //   });

// // //   const [addposts, setAddPosts] = useState<Post[]>(() => {
// // //     const savedAddPosts = localStorage.getItem('addposts');
// // //     return savedAddPosts ? JSON.parse(savedAddPosts) : [];
// // //   });

// // //   useEffect(() => {
// // //     if (posts.length === 0) {
// // //       const fetchPosts = async () => {
// // //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
// // //         const fetchedPosts = response.data;
// // //         setPosts(fetchedPosts);
// // //         localStorage.setItem('posts', JSON.stringify(fetchedPosts));
// // //       };
// // //       fetchPosts();
// // //     }
// // //   }, [posts]);

// // //   useEffect(() => {
// // //     localStorage.setItem('posts', JSON.stringify(posts));
// // //     localStorage.setItem('addposts', JSON.stringify(addposts));
// // //   }, [posts, addposts]);

// // //   return (
// // //     <PostContext.Provider value={{ posts, setPosts, addposts, setAddPosts }}>
// // //       <RouterProvider router={router} />
// // //     </PostContext.Provider>
// // //   );
// // // };

// // // export default App;




// // import React, { useState, useEffect } from 'react';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import axios from 'axios';

// // import Add from './Components/Add';
// // import Home from './Components/Home';
// // import { Post, PostContext } from './Components/Context';
// // import PostPage from './Components/PostPage';

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Home />,
// //   },
// //   {
// //     path: "/add",
// //     element: <Add />,
// //   },
// //   {
// //     path: "/post/:id",
// //     element: <PostPage />,
// //   }
// // ]);

// // const App: React.FC = () => {
// //   const [posts, setPosts] = useState<Post[]>(() => {
// //     const savedPosts = localStorage.getItem('posts');
// //     return savedPosts ? JSON.parse(savedPosts) : [];
// //   });

// //   const [addposts, setAddPosts] = useState<Post[]>(() => {
// //     const savedAddPosts = localStorage.getItem('addposts');
// //     return savedAddPosts ? JSON.parse(savedAddPosts) : [];
// //   });

// //   useEffect(() => {
// //     if (posts.length === 0) {
// //       const fetchPosts = async () => {
// //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
// //         const fetchedPosts = response.data;
// //         setPosts(fetchedPosts);
// //         localStorage.setItem('posts', JSON.stringify(fetchedPosts));
// //       };
// //       fetchPosts();
// //     }
// //   }, [posts]);

// //   useEffect(() => {
// //     localStorage.setItem('posts', JSON.stringify(posts));
// //     localStorage.setItem('addposts', JSON.stringify(addposts));
// //   }, [posts, addposts]);

// //   return (
// //     <PostContext.Provider value={{ posts, setPosts, addposts, setAddPosts }}>
// //       <RouterProvider router={router} />
// //     </PostContext.Provider>
// //   );
// // };

// // export default App;



// import React, { useState, useEffect } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import axios from 'axios';

// import Add from './Components/Add';
// import Home from './Components/Home';
// import { Post, PostContext } from './Components/Context';
// import PostPage from './Components/PostPage';

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/add", element: <Add /> },
//   { path: "/post/:id", element: <PostPage /> }
// ]);

// const App: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>(() => {
//     const savedPosts = localStorage.getItem('posts');
//     return savedPosts ? JSON.parse(savedPosts) : [];
//   });

//   useEffect(() => {
//     if (posts.length === 0) {
//       const fetchPosts = async () => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         const fetchedPosts = response.data;
//         setPosts(fetchedPosts);
//         localStorage.setItem('posts', JSON.stringify(fetchedPosts));
//       };
//       fetchPosts();
//     }
//   }, [posts]);

//   useEffect(() => {
//     localStorage.setItem('posts', JSON.stringify(posts));
//   }, [posts]);

//   return (
//     <PostContext.Provider value={{ posts, setPosts }}>
//       <RouterProvider router={router} />
//     </PostContext.Provider>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';

import Add from './Components/Add';
import Home from './Components/Home';
import { Post, PostContext } from './Components/Context';
import PostPage from './Components/PostPage';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/add", element: <Add /> },
  { path: "/post/:id", element: <PostPage /> }
]);

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [comments, setComments] = useState<any[]>(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  useEffect(() => {
    if (posts.length === 0) {
      const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
        localStorage.setItem('posts', JSON.stringify(fetchedPosts));
      };
      fetchPosts();
    }
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <PostContext.Provider value={{ posts, setPosts, comments, setComments }}>
      <RouterProvider router={router} />
    </PostContext.Provider>
  );
};

export default App;
