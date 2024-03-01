import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../interfaces/users';

interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        },
        create: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        edit: (state, action: PayloadAction<User>) => {
            const editedUser = action.payload
            const foundIndex = state.users.findIndex((user) => user.id === editedUser.id)
            state.users[foundIndex] = editedUser;
        },
        remove: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload
            const foundIndex = state.users.findIndex((user) => user.id === id)
            state.users.splice(foundIndex, 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUsers, remove, edit, create } = usersSlice.actions

export default usersSlice.reducer

