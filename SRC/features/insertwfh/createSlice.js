import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createService } from "./createService";
export const wfhInsertHandler=createAsyncThunk("create/wfhinsert",async(userData,thunkAPI)=>{
    try {
        return await createService.wfhInsertService(userData)
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
export const createWfhInsertSlice=createSlice({
    name:'cratetag',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(wfhInsertHandler.pending,(state)=>{
            state.isLoading=true
        }).addCase(wfhInsertHandler.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(wfhInsertHandler.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default createWfhInsertSlice.reducer