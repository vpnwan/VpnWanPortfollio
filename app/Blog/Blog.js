"use client";

import { useEffect, useState } from "react";
import { database } from "../Firebase"; // Adjust the path as needed
import { ref, get, child } from "firebase/database";
import Link from "next/link";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, "blogs"));
        if (snapshot.exists()) {
          setBlogs(Object.keys(snapshot.val()).map((key) => ({ id: key, ...snapshot.val()[key] })));
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-white">Treasure Hunt</h1>
        <p className="text-lg text-gray-400">Explore, discover, and find Code, links, and much more</p>
      </div>

      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link href={`/Blog/${blog.id}`}>
              <div className="relative" key={blog.id}>
                <div className="block overflow-hidden group rounded-xl shadow-lg">
                  <img
                    src={blog.image}
                    className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                    alt={blog.title}
                  />
                </div>

                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">{blog.category}</p>
                  <h2 className="text-2xl font-bold leading-5 text-white hover:text-purple-700">
                    {blog.title}
                  </h2>
                  <p className="mb-4 text-gray-400">{blog.description}</p>
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-300">{blog.author}</p>

                  {/* Link to the individual blog page */}
                  <Link href={`/Blog/${blog.id}`} className="font-medium underline text-purple-600">
                    Read More
                  </Link>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}
