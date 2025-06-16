import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import appSlice from './appSlice';

const appStore = configureStore({
  reducer: {
    app: appSlice,
    tasks: taskReducer,
  },
});

export default appStore;