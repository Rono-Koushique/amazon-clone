import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BasketItem = {
    id: number;
    title: string;
    price: string;
    image: string;
    quantity: number;
};

type BasketState = {
    items: BasketItem[];
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
        removeFromBasket: (state, action) => {},
    },
});

export default BasketSlice.reducer;
export const { addToBasket, removeFromBasket } = BasketSlice.actions;