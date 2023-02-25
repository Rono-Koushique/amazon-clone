import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";

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
    items: [
        {
            id: 200,
            title: "shoe",
            price: "123",
            image: "//sdfasdf",
            quantity: 1,
        },
    ],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<Product>) => {
            console.log(state.items);
            
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

export const { addToBasket, removeFromBasket } = basketSlice.actions;
// export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
