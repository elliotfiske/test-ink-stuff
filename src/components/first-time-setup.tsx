import React, { PropsWithChildren } from "react"
import { Text } from "ink"

export const FirstTimeSetup = (props: PropsWithChildren<{}>) => {
    // todo: check if first time setup is needed
    return (
        <>
            <Text>Running first time setup...</Text>
            {props.children}
        </>
    )
}

export const withFirstTimeSetup = (child: React.ReactElement) => {
    return <FirstTimeSetup>{child}</FirstTimeSetup>
}
