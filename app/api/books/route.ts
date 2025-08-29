import dbConnect from "@/lib/mongodb";
import Book, { IBook } from "@/models/Book";
import { NextResponse } from "next/server";

// POST: Add a book
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body: Partial<IBook> = await req.json();
    const book = await Book.create(body);
    return NextResponse.json(book, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Fetch all books
export async function GET() {
  try {
    await dbConnect();
    const books = await Book.find({});
    return NextResponse.json(books, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
