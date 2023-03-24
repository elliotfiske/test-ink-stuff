import { render } from "@testing-library/react"
import React from "react"
import $$CamelCaseName$$ from "./$$KebabCaseName$$"

describe("The $$CamelCaseName$$ component", () => {
    it("renders 'Hello World!", () => {
        const { getByText } = render(<$$CamelCaseName$$ />)
        expect(getByText("Hello World!")).toBeInTheDocument()
    })
})
