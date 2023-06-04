const bold = text => `*${text}*`
const italicize  = text => `_${text}_`
const newLine = (lins = 1) => `\n`.repeat(lins)
module.exports = {
  bold,
  newLine,
  italicize
}
