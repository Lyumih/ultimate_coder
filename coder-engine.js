let steps = []
let current = ''
let next = ''
let stop = 'return false'

let payload = []

function makeStep(result = "need add step result parameters") {
    next = result
    if (isStop()) {
        steps.push("END STEP. NEW CURRENT = " + current)
        payload.push([steps], [current])
    } else {
        current = result
        steps.push(current)
    }
    return steps
}

function inFunc(text = "need add function!") {
    let newFunction = Function(text)
    return newFunction()
}

function setStop(text = 'return true') {
    stop = text
}

function isStop() {
    return inFunc(stop)
}

function setCurrent(value = 'not set value params') {
    current = value
}