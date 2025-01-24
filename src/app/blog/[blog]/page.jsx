"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

const BlogDetails = () => {
  const [post, setPost] = useState(null);
  const id = usePathname();
  const idValue = id.split("/").pop();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idValue}`)
        .then((response) => setPost(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!post) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
export default BlogDetails;
