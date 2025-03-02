"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { database } from "../../Firebase";
import { ref, get, child } from "firebase/database";

export default function BlogDetails() {
  const { id } = useParams();
  const router = useRouter(); // ✅ Initialize useRouter for navigation
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchBlogDetails() {
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, `blogs/${id}`));
        if (snapshot.exists()) {
          setBlog(snapshot.val());
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogDetails();
  }, [id]);

  if (loading) return <p className="text-white text-center py-10">Loading...</p>;
  if (!blog) return <p className="text-white text-center py-10">Blog not found!</p>;

  return (
    <section className="bg-black text-white min-h-screen py-10 mt-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ✅ Back Button */}
        <button
          onClick={() => router.back()} // 👈 Go back to the previous page
          className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-400">{blog.publishedDate} - {blog.author}</p>
        <img src={blog.image} alt={blog.title} className="w-full rounded-lg mt-6 shadow-lg" />
        <p className="mt-6 text-lg text-gray-300">{blog.description}</p>
      </div>
    </section>
  );
}
