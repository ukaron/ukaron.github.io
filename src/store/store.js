import { configureStore } from '@reduxjs/toolkit'
import AppSlice from '../components/App/AppSlice'

const reducer = {
    common: AppSlice,
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;