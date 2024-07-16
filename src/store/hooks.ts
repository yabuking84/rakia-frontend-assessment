
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "./index";


export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();


