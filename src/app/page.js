"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "@/components/Header";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Blog Viewer</h1>
        <ul className="space-y-4">
          {posts.slice(0, 20).map((post) => (
            <li key={post.id} className="bg-white p-4 rounded shadow">
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
