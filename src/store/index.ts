import { configureStore } from "@reduxjs/toolkit";
import { slice as gamesSlice } from "@/store/games/slice";
import { gamesApi } from "@/store/games/api-slice";

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
