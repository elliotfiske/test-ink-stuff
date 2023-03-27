import React from "react"
import { ComponentNamePicker } from "./component-name-picker"
import { ComponentDirectoryPicker } from "./component-directory-picker"

type Props = {
    prechooseName?: string
}

export function ComponentCreator({ prechooseName }: Props) {
    const [_, setNameChosen] = React.useState(prechooseName ?? "")

    return (
        <ComponentNamePicker onNameChosen={setNameChosen}>
            <ComponentDirectoryPicker></ComponentDirectoryPicker>
        </ComponentNamePicker>
    )
}
