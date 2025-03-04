import { HIDE_PRODUCTFILTER, SHOW_PRODUCTFILTER } from "@/constant/switcher";
import { createSlice } from '@reduxjs/toolkit';

const filterSidebarslice = createSlice({
    name: 'productfilterSidebar',
    initialState: {
        productSidebar: HIDE_PRODUCTFILTER,
    },
    reducers: {
        toggleFilterSidebar: (state) => {
            state.productSidebar = state.productSidebar === HIDE_PRODUCTFILTER ? SHOW_PRODUCTFILTER : HIDE_PRODUCTFILTER
        }
    }
})
export const { toggleFilterSidebar } = filterSidebarslice.actions;
export default filterSidebarslice.reducer;