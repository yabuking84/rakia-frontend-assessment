import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { slice } from "./slice";
import { type GameType } from "@/schema/games";


const useStore = () => {
    return {
        store: useAppSelector((state) => state.games),
    }
}

const useActions = () => {
    const dispatch = useAppDispatch()
    const actions = slice.actions;
    return {
        setGame(payload: GameType) {
            dispatch(actions.setGame(payload))
        },
        setGames(payload: GameType[]) {
            dispatch(actions.setGames(payload))
        },
        delGame(payload: number) {
            dispatch(actions.delGame(payload))
        },
    }
}

export {
    useStore,
    useActions
}