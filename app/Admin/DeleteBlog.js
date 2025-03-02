"use client";

import { useState, useEffect } from "react";
import { database } from "./../Firebase";
import { ref, onValue, remove } from "firebase/database";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsRef = ref(database, "blogs");

    onValue(blogsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setBlogs(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
      } else {
        setBlogs([]);
      }
    });

    return () => {
      onValue(blogsRef, () => {}); // Cleanup
    };
  }, []);

  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await remove(ref(database, `blogs/${blogId}`));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded shadow-md mb-4">
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <p>{blog.description}</p>
            <button
              onClick={() => handleDelete(blog.id)}
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
