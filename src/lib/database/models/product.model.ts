import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  ThumbnailUrl: string;
  imageUrl: string[];
  price: string;
  isPromo: boolean;
  off_price: string;
  percent: number;
  rating: number;
}

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  ThumbnailUrl: { type: String, required: true },
  imageUrl: [{ type: String, required: true }],
  price: { type: String },
  isPromo: { type: Boolean, default: false },
  off_price: { type: String },
  percent: { type: Number },
  rating: { type: Number },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
