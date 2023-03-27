#!/usr/bin/env node

import React from "react"
import { render } from "ink"
import { Command } from "commander"
import { ComponentCreator } from "./components/component-creator"
import { withFirstTimeSetup } from "./components/first-time-setup"

export const cli = new Command()

cli.name("new-component")
    .alias("nc")
    .description("Create a new React Component in web-builder or cxr")
    .option("-n, --name <name>", "name of the component")
    .action((options) => {
        console.log("yay " + options.name + "!")
        render(
            withFirstTimeSetup(
                <ComponentCreator prechooseName={options.name} />
            )
        )
    })

cli.parse()
