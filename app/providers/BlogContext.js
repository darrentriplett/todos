import { createContext, useContext, useState, useId } from "react";

export const BlogContext = createContext({
  blogData: [],
});

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  console.log({ blogData });

  return (
    <BlogContext.Provider value={{ setBlogData, blogData }}>
      {children}
    </BlogContext.Provider>
  );
};
