import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createService } from "./createService";
export const timelineHandler=createAsyncThunk("create/timeline",async(userData,thunkAPI)=>{
    try {
        return await createService.timelineService(userData)
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
export const createTimeLineSlice=createSlice({
    name:'cratetag',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(timelineHandler.pending,(state)=>{
            state.isLoading=true
        }).addCase(timelineHandler.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(timelineHandler.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default createTimeLineSlice.reducer