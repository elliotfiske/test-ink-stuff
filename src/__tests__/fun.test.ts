describe("something good", () => {
    it("can work", () => {
        const arr = [
            1, 0, 2, 5, 3, 1, 5, 4, 6, 1, 4, 4, 6, 677, 67, 67, 35, 2, 36, 566,
            345, 3,
        ]

        arr.sort()

        expect(arr[1]! > arr[0]!).toBe(true)
    })
})
