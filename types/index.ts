export interface TCategories {
  icon: string;
  path: string;
  name: string;
}

export interface TProducts {
  name: string;
  price: number;
  off_price?: number;
  percent?: number;
  image: any;
  rating: number;
}
