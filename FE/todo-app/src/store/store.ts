import { AnyAction, PayloadAction, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import { tokenSlice } from "./slices/tokenSlice";
import { appApi } from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

export const store = wrapMakeStore(() =>
  configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [tokenSlice.name],
            compress: false,
            sameSite: "lax",
          })
        )
        .concat(appApi.middleware),
  })
);

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunkAction<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppState, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(store);

// export const wrapper = createWrapper<AppStore>(store);

// export const store = configureStore({
//   reducer: appReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .prepend(
//         nextReduxCookieMiddleware({
//           subtrees: [tokenSlice.name],
//           compress: false,
//           sameSite: "lax",
//         })
//       )
//       .concat(appApi.middleware),
// });

// export type AppStore = ReturnType<typeof store>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
