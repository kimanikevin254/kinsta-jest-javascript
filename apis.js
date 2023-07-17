function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
}

module.exports = { getTodos }