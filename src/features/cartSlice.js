// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper function to load cart and totalQuantity from localStorage
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  const storedQuantity = localStorage.getItem('totalQuantity');
  return {
    cartItems: storedCart ? JSON.parse(storedCart) : [],
    totalQuantity: storedQuantity ? JSON.parse(storedQuantity) : 0,
  };
};

// Helper function to save cartItems and totalQuantity to localStorage
const saveCartToLocalStorage = (cartItems, totalQuantity) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
};

const initialState = loadCartFromLocalStorage(); // Load cartItems and totalQuantity from localStorage

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      saveCartToLocalStorage(state.cartItems, state.totalQuantity); // Save updated cart and quantity to localStorage
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(i => i.id === action.payload.id);
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
        state.totalQuantity -= 1;
        saveCartToLocalStorage(state.cartItems, state.totalQuantity); // Save updated cart and quantity to localStorage
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      saveCartToLocalStorage(state.cartItems, state.totalQuantity); // Clear localStorage
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
