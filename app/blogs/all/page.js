"use client";
import { useRouter } from "next/navigation";
import { BlogContext } from "@/app/providers/BlogContext";
import { useState, useContext } from "react";
export default function Post({ params }) {
  const { blogData } = useContext(BlogContext);
  console.log(blogData);
  const router = useRouter();
  {
    blogData.map((blog) => (
      <div key={blog.id}>
        <p>{blog.title}</p>
        <p>{blog.blogentry}</p>
      </div>
    ));
  }
}
