import { Provider } from "react-redux"
import { store } from "@/store"


export default function StoreProvider(props: Props) {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

