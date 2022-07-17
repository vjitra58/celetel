import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const tableData = createSlice({ 
    name:'tableData',
    initialState,
    reducers:{
        getData:(state, action)=>{
            
        }
    },
})

export const {getData} = tableData.actions;
export default tableData.reducers;