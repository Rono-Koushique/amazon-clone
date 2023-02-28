import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct } from "@/types";

type BasketState = {
    items: BasketProduct[];
};

const initialState: BasketState = {
    items: [],
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
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                if (existingItem.quantity !== 0) {
                    existingItem.quantity -= 1;
                }
            }
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
        },
    },
});

export default BasketSlice.reducer;
export const { addToBasket, removeFromBasket, removeCompletelyFromBasket } = BasketSlice.actions;
