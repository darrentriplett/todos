"use client";
import { useRouter } from "next/navigation";
import { BlogContext } from "@/app/providers/BlogContext";
import { useState, useContext } from "react";
export default function Post({ params }) {
  const { id } = params;
  const { blogData } = useContext(BlogContext);
  // [{entry: '', title: 1}, {}, {}]
  console.log(blogData);
  const blog = blogData.find((blog) => {
    return blog.title === id;
  });
  const router = useRouter();
  const handleSubmit = (e) => {
    //this should push to the new blog entry based on id
    //const postid = blogData.id++;
    router.push("../blogs/new");

    console.log(blog);
  };
  return (
    <>
      <div>Blog Id: </div>
      <div>Blog Title: {blog.title}</div>
      <div> Blog Entry: {blog.blogentry}</div>
      <button onClick={handleSubmit}>add blog</button>
    </>
  );
}
