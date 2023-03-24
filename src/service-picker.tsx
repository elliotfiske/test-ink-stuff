import React from "react"
import { Text } from "ink"
import MultiSelect, { ListedItem } from "ink-multi-select"

export function ServicePicker() {
    const items: ListedItem[] = [
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

    const [selection, setSelection] = React.useState<ListedItem[]>([])

    if (selection.length > 0) {
        return <Text>{selection.map((sel) => sel.value).join(", ")}</Text>
    }

    return (
        <MultiSelect
            onSubmit={(result) => {
                setSelection(result)
            }}
            items={items}
        />
    )
}
