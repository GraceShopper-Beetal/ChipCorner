import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import LandingPageSlice from './ChipComponents/LandingPageSlice';
import singleOrder from './cart/CartPageSlice';
import CreateNewUserSlice from './CreateNewUser/CreateNewUserSlice';
import chipsSlice from './chipsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    landingPage: LandingPageSlice,
    order: singleOrder,
    createNewUser: CreateNewUserSlice,
    chips: chipsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
