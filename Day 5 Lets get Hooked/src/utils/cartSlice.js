import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state ) =>{
            state.items.length = 0;
        }
    }
})

/* This is the heirarchy of data object returned by createSlice function...

    {
        actions:{addItem , removeItem}
        ,
        reducers: 
    }
 */
export const{addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;