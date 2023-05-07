import { createSlice } from '@reduxjs/toolkit'
import UserData from '../../data/celebrities.json'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: UserData
    },
    reducers: {
        updateData: (state, action) => {
            let index = state.value.findIndex((item) => item.id === action.payload.id)
            state.value[index] = action.payload
        },
        deleteData: (state) => {
            state.value.pop()
        }

    }
})

export const { updateData, deleteData } = userSlice.actions
export default userSlice.reducer