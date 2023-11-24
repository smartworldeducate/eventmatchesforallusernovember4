import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createService } from "./createService";
export const updateRatingHandler=createAsyncThunk("create/updaterating",async(userData,thunkAPI)=>{
    try {
        return await createService.upRatingService(userData)
    } catch (error) {
       return thunkAPI.rejectWithValue(error) 
    }
})

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
export const createUpdateRatingSlice=createSlice({
    name:'cratetag',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(updateRatingHandler.pending,(state)=>{
            state.isLoading=true
        }).addCase(updateRatingHandler.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(updateRatingHandler.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default createUpdateRatingSlice.reducer