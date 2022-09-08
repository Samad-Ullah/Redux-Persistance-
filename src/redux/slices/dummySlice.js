import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  showLoader: false,
  showPaymentSuccess: false
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {...initialState},
  reducers: {
    setLoaderVisibility: (state, action) => {
      state.showLoader = action.payload;
    },
    setPaymentSuccessVisibility: (state, action) => {
      state.showPaymentSuccess = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoaderVisibility, setPaymentSuccessVisibility} = loaderSlice.actions;

export default loaderSlice.reducer;