import React, { PropsWithChildren } from "react"
import { Text } from "ink"
import { camelCase, kebabCase, upperFirst } from "lodash"
import TextInput from "ink-text-input"

type Props = {
    onNameChosen: (nameChosen: string) => void
}

function NameDisplayer({ name }: { name: string }) {
    return (
        <>
            <Text>New component filename: {kebabCase(name)}.tsx</Text>
            <Text>New component class name: {upperFirst(camelCase(name))}</Text>
        </>
    )
}

export const ComponentNamePicker = (props: PropsWithChildren<Props>) => {
    const [name, setName] = React.useState("")
    const [completed, setCompleted] = React.useState(false)

    if (completed) {
        return (
            <>
                <NameDisplayer name={name} />
                {props.children}
            </>
        )
    }

    return (
        <>
            <NameDisplayer name={name} />
            <TextInput
                value={name}
                onChange={setName}
                onSubmit={() => {
                    props.onNameChosen(name)
                    setCompleted(true)
                }}
            />
        </>
    )
}
