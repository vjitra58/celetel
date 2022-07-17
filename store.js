import {configureStore} from "@reduxjs/toolkit";
import tableReducer from './slices/tableData';

export const store = configureStore({
    reducer:{table:tableReducer},

});