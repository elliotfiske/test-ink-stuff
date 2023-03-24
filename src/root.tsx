import React from "react"
// import { store } from "./store"
// import { Provider } from "react-redux/es/alternate-renderers"
import { ServicePicker } from "./service-picker"
import { ComponentCreator } from "./components/component-creator"
// import "./store"

type Props = {
    command: string
}

export function App({ command }: Props) {
    if (command === "new-component") {
        return <ComponentCreator />
    }

    return (
        // <Provider store={store}>
        <ServicePicker />
        // </Provider>
    )
}
