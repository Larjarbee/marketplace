import { StaticImageData } from "next/image";

export type TCategories = {
  icon: string;
  path: string;
  name: string;
};

export type TCart = {
  id: string;
  price: number;
  discount?: number;
  quantity: number;
  name: string;
  image: StaticImageData;
};

export type TProducts = {
  id: string;
  name: string;
  price: number;
  promo: boolean;
  category: string;
  discount?: number;
  percent?: number;
  image: StaticImageData;
  rating: number;
};

export type CreateUserParams = {
  username: string;
  password: string;
};
