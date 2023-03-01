import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct } from "@/types";

type BasketState = {
    items: BasketProduct[];
    itemsCount: number;
    totalPrice: number;
};

const initialState: BasketState = {
    items: [],
    itemsCount: 0,
    totalPrice: 0,
};

export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (
            state,
            action: PayloadAction<{
                id: number;
                title: string;
                price: string;
                image: string;
                rating: number;
                description: string;
                hasPrime: boolean;
            }>
        ) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.itemsCount = state.items
                .map((item) => item.quantity)
                .reduce((a, b) => a + b, 0);
            state.totalPrice = state.items
                .map((item) => parseFloat(item.price) * item.quantity)
                .reduce((a, b) => a + b, 0);
        },
        removeFromBasket: (
            state,
            action: PayloadAction<{
                id: number;
                title: string;
                price: string;
                image: string;
                rating: number;
                description: string;
                hasPrime: boolean;
            }>
        ) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                if (existingItem.quantity !== 0) {
                    existingItem.quantity -= 1;
                }
            }
            state.itemsCount = state.items
                .map((item) => item.quantity)
                .reduce((a, b) => a + b, 0);
            state.totalPrice = state.items
                .map((item) => parseFloat(item.price) * item.quantity)
                .reduce((a, b) => a + b, 0);
        },
        removeCompletelyFromBasket: (
            state,
            action: PayloadAction<{
                id: number;
                title: string;
                price: string;
                image: string;
                rating: number;
                description: string;
                hasPrime: boolean;
            }>
        ) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            state.items.splice(index, 1);
            state.itemsCount = state.items
                .map((item) => item.quantity)
                .reduce((a, b) => a + b, 0);
            state.totalPrice = state.items
                .map((item) => parseFloat(item.price) * item.quantity)
                .reduce((a, b) => a + b, 0);
        },
    },
});

export default BasketSlice.reducer;
export const { addToBasket, removeFromBasket, removeCompletelyFromBasket } =
    BasketSlice.actions;
