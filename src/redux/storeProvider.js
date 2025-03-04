import { combineReducers } from "@reduxjs/toolkit";
import filterSidebarslicerReducer from '@/redux/filterSidebarSlice/filterSidebarSlice.js'
const storeProvider = combineReducers({
    filterSidebar: filterSidebarslicerReducer
})

export default storeProvider;