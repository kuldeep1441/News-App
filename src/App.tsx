import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Add from './Components/Add';
import Home from './Components/Home';
import { Post, PostContext } from './Components/Context';
import PostPage from './Components/PostPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  }
]);

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [addposts, setAddPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts, addposts, setAddPosts }}>
      <RouterProvider router={router} />
    </PostContext.Provider>
  );
}

export default App;
