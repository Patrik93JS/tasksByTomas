import { appApi } from "@/store/api";
import { useAppDispatch } from "@/store/hooks";
import { tokenSlice } from "@/store/slices/tokenSlice";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const Logout: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = useCallback(async () => {
    dispatch(tokenSlice.actions.reset());
    dispatch(appApi.util.resetApiState());
    await router.push("/login");
  }, [dispatch, router]);

  useEffect(() => {
    logout();
  }, [logout]);

  return null;
};
