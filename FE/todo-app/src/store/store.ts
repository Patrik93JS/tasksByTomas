import { PayloadAction, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import { tokenSlice } from "./slices/tokenSlice";
import { appApi } from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

export type AppState = ReturnType<typeof store>["getState"];
export type AppDispatch = ReturnType<typeof store>["dispatch"];
export type HydrateCookieAction = PayloadAction<Pick<AppState, "token">>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
