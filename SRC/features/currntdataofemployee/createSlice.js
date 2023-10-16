import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createService } from "./createService";
export const currentEmpDateDataHandler=createAsyncThunk("employee/currentdateData",async(userData,thunkAPI)=>{
    try {
        return await createService.currentDateDataOfEmployee(userData)
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
export const createCurrentDateDataSlice=createSlice({
    name:'cratetag',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(currentEmpDateDataHandler.pending,(state)=>{
            state.isLoading=true
        }).addCase(currentEmpDateDataHandler.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(currentEmpDateDataHandler.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default createCurrentDateDataSlice.reducer