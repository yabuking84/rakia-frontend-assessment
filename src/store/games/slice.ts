import { createSlice } from "@reduxjs/toolkit";
import { type GameType } from "@/schema/games";
import { extraReducers } from "./middleware"

interface State {
  games: GameType[];
}

const initState: State = {
  games: [],
};

const slice = createSlice({
  name: "games",
  initialState: initState,
  reducers: {
    setGame(state, { payload }: { payload: GameType }) {
      const fnd = state.games.find((e) => e.id === payload.id);
      if (fnd) {
        fnd.n = payload.n;
        fnd.c = payload.c;
      }
    },
    setGames(state, { payload }: { payload: GameType[] }) {
      state.games = [...payload];
    },
    delGame(state, { payload }: { payload: number }) {
      state.games = [...state.games.filter((e) => e.id !== payload)];
    },
  },
  extraReducers
});

export { type State, slice };
