import { GamesType } from "@/schema/games";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URI! }),
  endpoints: (builder) => ({
    getAllGames: builder.query<GamesType, void>({
      query: () => "/games.json",
    }),
  }),
});
