import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./adminService";
export const listUser=createAsyncThunk("admin/userlist",async(userData,thunkAPI)=>{
    try {
        return await userService.userList()
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
export const userSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(listUser.pending,(state)=>{
            state.isLoading=true
        }).addCase(listUser.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.message=action.payload
        }).addCase(listUser.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default userSlice.reducer