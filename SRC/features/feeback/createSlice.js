import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createService } from "./createService";
export const feedBackHandler=createAsyncThunk("create/feedback",async(userData,thunkAPI)=>{
    try {
        return await createService.feedbackService(userData)
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
export const createFeedBackSlice=createSlice({
    name:'cratetag',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(feedBackHandler.pending,(state)=>{
            state.isLoading=true
        }).addCase(feedBackHandler.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(feedBackHandler.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default createFeedBackSlice.reducer