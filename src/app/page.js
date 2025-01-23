"use client";
import Header from "@/components/Header";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Blog Viewer</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="bg-gray-200 p-4 rounded shadow">
              <Link
                href={`/blog/${post.id}`}
                className="text-black hover:underline hover:text-blue-500"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
