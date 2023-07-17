const { multipleCalls } = require('./functions')


test("functions are called multiple times correctly", () => {
    const mockFunction = jest.fn()

    multipleCalls(5, mockFunction)

    expect(
        mockFunction.mock.calls.length
    ).toBe(5)
})
