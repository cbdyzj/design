export function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

export function delay(seconds) {
    return async result => {
        await sleep(seconds * 1000)
        return result
    }
}
