const {
    parentPort,
} = require('worker_threads')

parentPort.on('message', (data) => {
    const { arr } = data
    console.log('modifying sharred array')
    arr[0] = 1
    arr[1] = 12
    arr[2] = 2
    parentPort.postMessage({})
})