import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gameStatus: 0,
}

const AppSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        gameInit(state) {
            state.gameStatus = 1
        },
        gameOver(state) {
            state.gameStatus = 2
        }
    }
})

export const {
    gameInit
} = AppSlice.actions

export const AppSelector = state => state.common;

export default AppSlice.reducer