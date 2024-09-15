import { createSlice } from '@reduxjs/toolkit';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from './LocalStorage';

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, quantity, images } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cartItems.push({ id, name, price, quantity, images });
            }

            state.totalAmount += price * quantity;
            state.totalItems += quantity;

            saveCartToLocalStorage(state);
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalAmount += item.price;
                state.totalItems += 1;
                
                saveCartToLocalStorage(state);
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalAmount -= item.price;
                state.totalItems -= 1;
                
                saveCartToLocalStorage(state);
            }
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
                state.totalAmount -= item.price * item.quantity;
                state.totalItems -= item.quantity;

                saveCartToLocalStorage(state);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalItems = 0;
          },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart,clearCart  } = cartSlice.actions;
export default cartSlice.reducer;
