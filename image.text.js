const { newLine, bold, italicize } = require('./helper.js')

module.exports = {
  processor: `Generating your image...`,
  error: 'I could not understand that..  try to rephrase and send it again.',
  help: `🏞️🏞️🏞️${newLine()}Need a quick image reference? Fredo creates images from text captions for a wide range of concepts expressible in natural language.${newLine(2)}💡 Tip: start with the word ${bold('image')} and specify after that description of your desired image${newLine(2)}`+
      `${bold('Examples:')}${newLine()}image an illustration of a baby daikon radish in a tutu walking a dog${newLine(2)}` +
      italicize(`Send ${bold('HELP')} to return to main menu`),
}
