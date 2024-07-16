import { createSlice } from "@reduxjs/toolkit";
import { type GameType } from "@/schema/games";

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
});

export { type State, slice };
