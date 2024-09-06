import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TCart } from "../../types";

type initialStateProps = {
  items: TCart[];
  totalPrice: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: <initialStateProps>{
    items: JSON.parse(localStorage.getItem("carts") as any) || [],
    totalPrice: JSON.parse(localStorage.getItem("cartsTotalPrice") as any) || 0,
  },
  reducers: {
    addItemToCart: (state, action: PayloadAction<TCart>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice += newItem.price * newItem.quantity;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          name: newItem.name,
          image: newItem.image,
          discount: newItem?.discount,
        });
      } else {
        existingItem.quantity += newItem.quantity;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("carts", JSON.stringify(state.items));
        localStorage.setItem(
          "cartsTotalPrice",
          JSON.stringify(state.totalPrice)
        );
      }
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem?.quantity > 1) {
        state.totalPrice -= existingItem.price;
        existingItem.quantity -= 1;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalPrice -= existingItem.price;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("carts", JSON.stringify(state.items));
        localStorage.setItem(
          "cartsTotalPrice",
          JSON.stringify(state.totalPrice)
        );
      }
    },

    deleteItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        const totalPrice = existingItem.quantity * existingItem.price;
        state.totalPrice -= totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("carts", JSON.stringify(state.items));
        localStorage.setItem(
          "cartsTotalPrice",
          JSON.stringify(state.totalPrice)
        );
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const cartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
