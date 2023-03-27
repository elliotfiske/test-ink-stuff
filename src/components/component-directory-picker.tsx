import React from "react"
import { Box, Text } from "ink"
import { getFiles } from "../helpers"
import TextInput from "ink-text-input"
import { FullScreen } from "./fullscreen"

export const ComponentDirectoryPicker = () => {
    const [dirs, setDirs] = React.useState<string[]>([])
    const [dirInput, setDirInput] = React.useState("")
    const [completed, setCompleted] = React.useState(false)

    React.useEffect(() => {
        async function findFiles() {
            const files = await getFiles(
                "/users/elliotfiske/repo/airkit/node/web-builder"
            )

            setDirs(files)
        }

        void findFiles()
    }, [])

    if (completed) {
        return (
            <>
                <Text>Completed!</Text>
            </>
        )
    }

    return (
        <>
            <FullScreen>
                <Box flexDirection="column">
                    <Text>Enter a place to put your cool new component:</Text>
                    <TextInput
                        value={dirInput}
                        onChange={setDirInput}
                        onSubmit={() => {
                            setCompleted(true)
                        }}
                    />
                    {dirs.length > 0 && (
                        <Text color={"greenBright"}>
                            {dirs.slice(0, 5).join(", ")}
                        </Text>
                    )}
                    {dirs.length === 0 && (
                        <Text color={"blue"}>
                            Gathering possible directories...
                        </Text>
                    )}
                </Box>
            </FullScreen>
        </>
    )
}
