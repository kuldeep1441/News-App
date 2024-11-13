// import { createContext } from 'react';

// export interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// interface PostContextType {
//   posts: Post[];
//   setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
//   addposts: Post[];
//   setAddPosts: React.Dispatch<React.SetStateAction<Post[]>>;
// }

// export const PostContext = createContext<PostContextType | undefined>(undefined);



import { createContext } from 'react';

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);
