export type TCategories = {
  icon: string;
  path: string;
  name: string;
};

export type TProducts = {
  id: string;
  name: string;
  price: number;
  promo: boolean;
  category: string;
  off_price?: number;
  percent?: number;
  image: any;
  rating: number;
};

export type CreateUserParams = {
  username: string;
  password: string;
};
