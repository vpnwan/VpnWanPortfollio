"use client";

import { useState } from "react";
import { database } from "./../Firebase";
import { ref, push, set } from "firebase/database";
import BlogList from "./DeleteBlog";
import BlogManager from "./BLogmanager";

export default function AddBlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    category: "",
    readingTime: "",
    url: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const newBlogRef = push(ref(database, "blogs")); // Creates a unique ID

      await set(newBlogRef, {
        id: newBlogRef.key,
        ...formData,
        publishedDate: new Date().toISOString().split("T")[0], // Current date
        likes: 0,
        comments: 0,
      });

      setMessage("Blog added successfully!");
      setFormData({
        title: "",
        description: "",
        image: "",
        author: "",
        category: "",
        readingTime: "",
        url: "",
      });
    } catch (error) {
      console.error("Error adding blog:", error);
      setMessage("Failed to add blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-36 bg-white text-black shadow-md rounded-lg">

      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required></textarea>
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" required />
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border rounded" required />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" required />
        <input type="text" name="readingTime" value={formData.readingTime} onChange={handleChange} placeholder="Reading Time (e.g. 5 min read)" className="w-full p-2 border rounded" required />
        <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="Blog URL" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </form>


      <h1 className="text-4xl mt-10 font-extrabold bg-slate-400">Delete Blogs</h1>
      <BlogList />

      <BlogManager />
    </div>
  );
}
