import { configureStore, } from "@reduxjs/toolkit";
import authReducer from '../features/users/userSlice'
import loginReducer from '../features/register/loginSlice';
import tagReducer from '../features/tags/tagSlice'
import singleTagReducer from '../features/tagsingle/singletagSlice'
import catReducer from '../features/category/allCatSlice'
import filterReducer from '../features/category/singleCatSlice'
import scanReducer from '../features/scan/scanSlice'
import LoginUserReducer from '../features/register/googleLoginSlice'
import userReducer from '../features/admin/adminSlice'
import googleReducer from '../features/register/googleLoginSlice'
import createReducer from '../features/createTag/createSlice'
import searchReducer from '../features/emplolyee/createSlice'
import reporteeReeducer from '../features/reportee/createSlice'
import employeeRerducer from '../features/allemoloyee/createSlice'
import currentEmpDateReducer from '../features/currntdataofemployee/createSlice'
import lineMangerReducer from '../features/lineManager/createSlice'
import salMonthReducer from '../features/salmonth/createSlice'
import empSalReducer from '../features/empSalary/createSlice'
import empMessageReducer from '..//features/message/createSlice'
import detailMessageReducer from '../features/detailMessage/createSlice'
import historyReducer from '../features/history/createSlice'
import appraisalReducer from '../features/appraisal/createSlice'
import bssChildReducer from '../features/childbss/createSlice'
import feedbackReducer from '../features/feeback/createSlice'
import ratingReducer from '../features/rating/createSlice'
import getRatingReducer from '../features/getallrating/createSlice'
import updateRatingReducer from '../features/updaterating/createSlice'
import utilityReducer from '../features/utility/createSlice'
import wfhReducer from '../features/wfh/createSlice'
import wfhInsertReducer from '../features/insertwfh/createSlice'
import timeLineReducer from '../features/timeline/createSlice'
import profileReducer from '../features/profile/createSlice'
import movementReducer from '../features/movement/createSlice'
import leaveBalanceReducer from '../features/balanceleave/createSlice'
export const store=configureStore({
    reducer:{
        register:authReducer,
        login:loginReducer,
        getAllTags:tagReducer,
        singleTag:singleTagReducer,
        getAllCats:catReducer,
        getCatFilter:filterReducer,
        scanar:scanReducer,
        userLogin:LoginUserReducer,
        userList:userReducer,
        googleUser:googleReducer,
        createtag:createReducer,
        searchEmp:searchReducer,
        reportee:reporteeReeducer,
        allEmployee:employeeRerducer,
        currntEmpAttanence:currentEmpDateReducer,
        getLineManger:lineMangerReducer,
        getSalMonth:salMonthReducer,
        getEmpSalary:empSalReducer,
        empMessageState:empMessageReducer,
        detailMessageState:detailMessageReducer,
        selectHistory:historyReducer,
        appraisalState:appraisalReducer,
        childState:bssChildReducer,
        feedBackState:feedbackReducer,
        ratingState:ratingReducer,
        getallRating:getRatingReducer,
        updateRatingState:updateRatingReducer,
        utilityState:utilityReducer,
        wfhState:wfhReducer,
        wfhInsertState:wfhInsertReducer,
        timeLineState:timeLineReducer,
        profileState:profileReducer,
        movementState:movementReducer,
        leaveBalanceState:leaveBalanceReducer

       }
})