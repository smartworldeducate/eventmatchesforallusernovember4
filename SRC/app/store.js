import { configureStore, } from "@reduxjs/toolkit";
import registerReducer from '../features/register/registerSlice';
import emailReducer from '../features/login/emailSlice';
import passwordReducer from '../features/login/passwordSlice';
import adminListRerducer from '../features/adminlist/adminSlice';
import alleventsReducer from '../features/allevents/alleventSlice';
import activitiReducer from '../features/eventactivityhome/hactivitySlice';
import userActivityReducer from '../features/useractivity/userActivitySlice';
import activityDetailReducer from '../features/activitydetail/activityDetailSlice';
import pastEventReducer from '../features/pastevents/pastEventSlice';
import speakerReducer from '../features/speaker/speakerSlice';
import speakerDetailReducer from '../features/speakerDetail/speakerDetailSlice';
import feedBackReducer from '../features/feedback/feedBackSlice';
import futureEventReducer from '../features/upcommingevents/upcomingEventSlice';
import verifiEmailReducer from '../features/login/emailSlice';
import verifiPasswordReducer from '../features/login/passwordSlice';
import registerActivityReducer from '../features/registeractivity/registerActivitySlice'
export const store=configureStore({
    reducer:{
        registerState:registerReducer,
        emailState:emailReducer,
        passwordState:passwordReducer,
        adminListState:adminListRerducer,
        alleventsState:alleventsReducer,
        acitivityState:activitiReducer,
        userActivityState:userActivityReducer,
        activityDetailState:activityDetailReducer,
        pastEventState:pastEventReducer,
        speakerState:speakerReducer,
        speakerDetailState:speakerDetailReducer,
        feedBackState:feedBackReducer,
        futureEventState:futureEventReducer,
        emailState:verifiEmailReducer,
        passwordState:verifiPasswordReducer,
        registerActivityState:registerActivityReducer
       }
})