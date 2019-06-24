function sumNumbersByIndex(item, first, second) {
    let letters = (item + '').split('')
    return Number(letters[first]) + Number(letters[second])
}

function crat(item, power) {
    return item % power === 0
}





/** HASHING */
function md5Encode(text) {
    console.log('input', text)
    let md5 = text

    console.log('out md5 hashing', md5)
    return md5
}