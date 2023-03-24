import React from "react"
import { Text } from "ink"
import { getFiles } from "../helpers"
import TextInput from "ink-text-input"

export const ComponentDirectoryPicker = () => {
    const [dirs, setDirs] = React.useState<string[]>([])
    const [dirInput, setDirInput] = React.useState("")

    React.useEffect(() => {
        async function findFiles() {
            const files = await getFiles(
                "/users/elliotfiske/repo/airkit/node/web-builder"
            )

            setDirs(files)
        }

        void findFiles()
    }, [])

    return (
        <>
            <Text>Enter a place to put your cool new component:</Text>
            <TextInput value={dirInput} onChange={setDirInput} />
            {dirs.length > 0 && (
                <Text color={"greenBright"}>{dirs.slice(0, 5).join(", ")}</Text>
            )}
            {dirs.length === 0 && (
                <Text color={"blue"}>Gathering possible directories...</Text>
            )}
        </>
    )
}
