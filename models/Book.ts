import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  price: number;
  category: string;
  description?: string;
  image?: string; // image URL for now
  createdAt: Date;
}

const BookSchema: Schema<IBook> = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  price: { type: Number },
  category: { type: String },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Book: Model<IBook> =
  mongoose.models.Book || mongoose.model<IBook>("Book", BookSchema);

export default Book;
