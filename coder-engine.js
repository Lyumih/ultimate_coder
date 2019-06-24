let steps = []
let current = ''
let next = ''
let stop = 'return false'

function makeStep(result) {
    next = result
    if (isStop()) {
        steps.push("END STEP. current = " + current)
    } else {
        current = result
        steps.push(current)
    }
    return steps
}

function logic(text) {
    let newFunction = Function(text)
    return newFunction()
}

function setStop(text = 'return true') {
    stop = text
}

function isStop(text = '') {
    return logic(stop)
}