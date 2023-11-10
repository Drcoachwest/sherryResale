import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "../features/counter/counterSlice";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { promotionsReducer } from "../features/Promotions/promotionsSlice";
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from "../features/partners/partnersSlice";
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

