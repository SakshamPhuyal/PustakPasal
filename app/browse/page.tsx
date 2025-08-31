"use client";
import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";
interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
}

export default function Browse() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setBooks(Array.isArray(data) ? data : data.books || []);
      })
      .catch((err) => {
        console.error("Failed to fetch books:", err);
        setBooks([]);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10">
      <p className="text-3xl font-bold mb-8">Browse Books</p>
      <div className="max-w-2xl mb-10 ml-80">
        <div className="flex">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow border border-gray-400 rounded-l-xl px-4 py-2 text-lg focus:outline-blue-500"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-xl text-lg flex items-center gap-2">
            <HiMagnifyingGlass size={20} />
            Search
          </button>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book._id} className="border rounded-xl p-5 shadow hover:shadow-lg transition">
              {book.image ? (
                <Image height={100} width={100}
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">Category: {book.category}</p>
              <p className="text-green-700 font-bold mt-2">Rs. {book.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
}
