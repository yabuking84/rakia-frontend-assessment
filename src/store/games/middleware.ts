import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { State } from "./slice"
import { gamesApi } from "./api-slice"



const extraReducers = (builder: ActionReducerMapBuilder<State>) => {
    builder
        .addMatcher(gamesApi.endpoints.getAllGames.matchFulfilled, (state, {payload}) => {
            state.games = [...payload]
        })
        .addDefaultCase((state, action) => {
            console.log('addDefaultCase', action.type)
        })
}


export {
    extraReducers,
}