"use client";

import { useState, useEffect } from "react";
import { database } from "./../Firebase";
import { ref, onValue, update, remove } from "firebase/database";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    category: "",
    readingTime: "",
    url: "",
  });

  // Fetch blogs from Firebase
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle edit button click
  const handleEditClick = (blog) => {
    setEditingBlog(blog.id);
    setFormData(blog);
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingBlog) return;

    try {
      await update(ref(database, `blogs/${editingBlog}`), formData);
      alert("Blog updated successfully!");
      setEditingBlog(null);
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
      console.error("Error updating blog:", error);
      alert("Failed to update blog.");
    }
  };

  // Handle delete
  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await remove(ref(database, `blogs/${blogId}`));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>

      {editingBlog ? (
        // Edit Form
        <form onSubmit={handleUpdate} className="space-y-4 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Edit Blog</h3>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required></textarea>
          <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" required />
          <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border rounded" required />
          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" required />
          <input type="text" name="readingTime" value={formData.readingTime} onChange={handleChange} placeholder="Reading Time" className="w-full p-2 border rounded" required />
          <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="Blog URL" className="w-full p-2 border rounded" required />
          <div className="flex space-x-2">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Update Blog</button>
            <button type="button" onClick={() => setEditingBlog(null)} className="w-full bg-gray-500 text-white py-2 rounded">Cancel</button>
          </div>
        </form>
      ) : (
        // Blog List
        blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="p-4 border rounded shadow-md mb-4">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="flex space-x-2 mt-2">
                <button onClick={() => handleEditClick(blog)} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
                <button onClick={() => handleDelete(blog.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
}
