function multipleCalls(count, callback) {
    if (count < 0) return;

    for (let counter = 1; counter <= count; counter++) {
        callback()
    }
}


module.exports = { multipleCalls }