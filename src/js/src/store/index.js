import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialModalHandler = {showModal : false}
const initialCartValue = {cartFoods : [], count:0, totalAmount:0}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartValue,
    reducers:{
        addToCart(state,action){
            const newFood = action.payload;
            const existingFood = state.cartFoods.find((food) => food.id === newFood.id);
            state.count++
            if(!existingFood){
                state.cartFoods.push({
                    id:newFood.id,
                    title:newFood.title,
                    totalPrice: newFood.price,
                    quantity:1,
                })
                state.totalAmount+=newFood.price
            }else{
                existingFood.quantity++
                state.totalAmount += existingFood.totalPrice 
            }
            
            
        },
        addMore(state,action){
            const id = action.payload.id;
            const existingFood = state.cartFoods.find((food) => food.id === id)
            existingFood.quantity++
            state.totalAmount+=existingFood.totalPrice
            state.count++
        },
        removeFood(state,action){
            const id = action.payload.id
            const existingFood = state.cartFoods.find((food)=> food.id ===id)
            state.totalAmount = state.totalAmount - existingFood.totalPrice
            existingFood.quantity--
            state.count--

            if(existingFood.quantity < 1){
               state.cartFoods = state.cartFoods.filter(food => food.id !== id)
            }

        }

       


    }
})
const modalHandlerSlice = createSlice ({
    name:'modal',
    initialState:initialModalHandler,
    reducers:{
        toggleModal(state){
            state.showModal = !state.showModal
        }
    }
})





const store = configureStore({reducer:{modal:modalHandlerSlice.reducer,cart:cartSlice.reducer}});
export const cartActions = cartSlice.actions
export const modalActions = modalHandlerSlice.actions;
export default store;