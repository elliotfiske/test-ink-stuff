import React from "react"
import { ComponentNamePicker } from "./component-name-picker"
import { ComponentDirectoryPicker } from "./component-directory-picker"

export function ComponentCreator() {
    const [nameChosen, setNameChosen] = React.useState("")

    return (
        <ComponentNamePicker onNameChosen={setNameChosen}>
            <ComponentDirectoryPicker></ComponentDirectoryPicker>
        </ComponentNamePicker>
    )
}
