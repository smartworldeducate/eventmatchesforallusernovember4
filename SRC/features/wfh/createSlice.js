import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createService } from "./createService";
export const wfhHandler=createAsyncThunk("create/wfh",async(userData,thunkAPI)=>{
    try {
        return await createService.wfhService(userData)
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
export const createWfhSlice=createSlice({
    name:'cratetag',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(wfhHandler.pending,(state)=>{
            state.isLoading=true
        }).addCase(wfhHandler.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(wfhHandler.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default createWfhSlice.reducer