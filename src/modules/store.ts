import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// const data = 9591;

// 3. createslice를 통해 reducer 정의해주기
// type에서 받아오는 변수값은 payload로 통일하기

const myNumber = createSlice({
    name: 'myNumber',
    initialState: 9591,
    reducers: {
        add: (state : number)  => {
            state += 1;
            return state
        },
        minus: (state : number) => {
            state -= 1;
            return state
        },
        reset: (state: number) => {
            state = 0;
            return state
        }
    }
})

const myString = createSlice({
    name: 'myString',
    initialState: 'park',
    reducers: {
        stringReset: (state: string) => {
            state = '';
            return state;
        },
        stringAddOne: (state: string) => {
            return `${state}1`;
        }
    }
})


// 2. reducer 생성 여러개가 있을경우 combineReducers 을 통해 하나로 묶어주기
const reducer = combineReducers({
    myNumber : myNumber.reducer,
    myString : myString.reducer
})


// 1. store 생성
const store = configureStore({ reducer })

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch