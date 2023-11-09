//this page should have a form that has an input field for the author
"use client";
import { useState, useEffect, useId, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BlogContext } from "@/app/providers/BlogContext";

const BlogForm = () => {
  const [blog, setBlog] = useState({
    id: 1,
    title: "",
    blogentry: "",
  });
  const { blogData, setBlogData } = useContext(BlogContext);

  const router = useRouter();

  const handleSubmit = () => {
    //this should push to the new blog entry based on id

    /**
     * blogData.push(newBlogData)
     * setBlogData(blogData)
     */

    setBlogData([...blogData, blog]);
    // set the state to the new array returned from the map function

    router.push(`/post/${blog.title}`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(blog);
  };

  return (
    <>
      <label>Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={blog.title || ""}
        onChange={handleChange}
      />
      <label>Blog</label>
      <input
        id="blogentry"
        name="blogentry"
        type="textarea"
        value={blog.blogentry || ""}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>add blog</button>
    </>
  );
};
export default BlogForm;
//text area input for the blog itself

//submit button
//after submit button is clicked re-route to the blog at that page.
//create a unique id for that blog and then go to that page

//go to react dev docs and lookup context
//how can you lift the state and functionality from blog page to the context
