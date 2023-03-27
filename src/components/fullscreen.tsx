import React, { PropsWithChildren } from "react"
import { Box } from "ink"

export const FullScreen = (props: PropsWithChildren<{}>) => {
    const [size, setSize] = React.useState({
        columns: process.stdout.columns,
        rows: process.stdout.rows,
    })

    React.useEffect(() => {
        function onResize() {
            setSize({
                columns: process.stdout.columns,
                rows: process.stdout.rows,
            })
        }

        process.stdout.on("resize", onResize)
        process.stdout.write("\x1b[?1049h")
        return () => {
            process.stdout.off("resize", onResize)
            process.stdout.write("\x1b[?1049l")
        }
    }, [])

    return (
        <Box width={size.columns} height={size.rows}>
            {props.children}
        </Box>
    )
}
