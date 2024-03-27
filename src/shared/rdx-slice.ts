import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRdxMainSlice, TExchangedata, TSelectedCurrency } from './types'


// Define the initial state using that type
const initialState: IRdxMainSlice = {
    from_currency: {} as TSelectedCurrency, 
    to_currency: {} as TSelectedCurrency,
    exchange_data: {} as TExchangedata,
    is_rate_limited: false,
    loading: false,
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFromCurrency: (state, action: PayloadAction<TSelectedCurrency>) => {
      state.from_currency = action.payload;
    },
    setToCurrency: (state, action: PayloadAction<TSelectedCurrency>) => {
      state.to_currency = action.payload;
    },
    updateExchangeData: (state, action: PayloadAction<TExchangedata>) => {
        state.exchange_data = action.payload;
    },
    setIsRateLimited: (state, action: PayloadAction<boolean>) => {
        state.is_rate_limited = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    },
  },
})

export const { 
    setFromCurrency,
    setToCurrency,
    updateExchangeData,
    setIsRateLimited,
    setLoading
 } = mainSlice.actions

export default mainSlice.reducer