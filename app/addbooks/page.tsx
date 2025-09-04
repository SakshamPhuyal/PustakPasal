"use client";
import { useState } from "react";

export default function AddBooks() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Book added successfully!");
      setForm({ title: "", author: "", price: "", category: "", description: "", image: "" });
    } else {
      alert("Error adding book!");
    }
  };

  return (
    <div>
      <p className="text-5xl font-bold ml-15 mt-6">Add Books</p>

      <form onSubmit={handleSubmit} className="ml-35 mr-80 mt-5 space-y-5">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Rs"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">Select a category</option>
            <option>Grade 1</option>
            <option>Grade 2</option>
            <option>Grade 3</option>
            <option>Grade 4</option>
            <option>Grade 5</option>
            <option>Grade 6</option>
            <option>Grade 7</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade XI</option>
            <option>Grade XII</option>
            <option>Bachelors</option>
            <option>Novels</option>
            <option>Auto-Bio Graphy</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            rows={4}
            placeholder="Enter book description"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL / Filename</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Paste image URL"
          />
          <p className="text-sm text-gray-500 mt-1">
            
          </p>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
