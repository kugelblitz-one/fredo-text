// add text files here
const exportList = [
    'tldr',
]

const exportMap = {}

exportList.forEach(fileName=> exportMap[fileName] = require(`./${fileName}.text.json`))

module.exports = exportMap