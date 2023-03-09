import React from "react"
import { Text, Box } from "ink"
import childProcess from "child_process"

export const CommandRunner = () => {
  const [output, setOutput] = React.useState<string[]>([])

  React.useEffect(() => {
    const subProcess = childProcess.spawn("ping", ["google.com"])

    subProcess.stdout.on(
      "data",
      (newOutput: { toString: (foo: string) => string }) => {
        const lines = newOutput
          .toString("utf8")
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
        setOutput((output) => [...output, ...lines])
      }
    )
  }, [setOutput])

  return (
    <Box flexDirection="column" padding={1} minHeight={10}>
      <Text>Сommand output 🤨</Text>
      <Box borderStyle="single" minHeight={5} flexGrow={1}>
        <Text>{output.slice(-5).join("\n")}</Text>
      </Box>
    </Box>
  )
}
