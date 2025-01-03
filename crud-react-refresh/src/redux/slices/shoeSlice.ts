import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Shoe {
  id: string;
  name: string;
  brand: string;
  size: number; 
  price: number; 
  stock: number; 
  image: string; 
  description: string; 
  category: string; 
}

interface ShoeState {
  shoes: Shoe[];
  filters: {
    size?: number;
    category?: string;
  };
}

const initialState: ShoeState = {
  shoes: [],
  filters: {}
};

const shoeSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    setShoes(state, action: PayloadAction<Shoe[]>) {
      state.shoes = action.payload;
    },
    setFilter(state, action: PayloadAction<{ size?: number; category?: string }>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters(state) {
      state.filters = {};
    }
  }
});

export const { setShoes, setFilter, clearFilters } = shoeSlice.actions;

export default shoeSlice.reducer;

