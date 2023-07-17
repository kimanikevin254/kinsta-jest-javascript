const { getTodos } = require('./apis')

// test("gets a todo object with the right properties", () => {
//     return getTodos()
//         .then((response) => {
//              return response.json()
//         })
//         .then((data) => {
//             expect(data).toHaveProperty('userId')
//             expect(data).toHaveProperty('id')
//             expect(data).toHaveProperty('title')
//             expect(data).toHaveProperty('completed')
//             // expect(data).toHaveProperty('description')
//         })
// })

test("gets a todo object with the right properties", async () => {
    const response = await getTodos()
    const data = await response.json()
  
    expect(data).toHaveProperty("userId")
    expect(data).toHaveProperty("id")
    expect(data).toHaveProperty("title")
    expect(data).toHaveProperty("completed")
})
