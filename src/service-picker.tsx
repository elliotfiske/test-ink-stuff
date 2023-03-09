import React from "react"
import MultiSelect from "ink-multi-select"

export function ServicePicker() {
    const items = [
        {
            label: "First",
            value: "first",
        },
        {
            label: "Second",
            value: "second",
        },
        {
            label: "Third",
            value: "third",
        },
    ]

    return <MultiSelect items={items} />
}
