import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.product.value)`
export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
