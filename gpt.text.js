const { newLine, bold } = require('./helper.js')

module.exports = {
  processor: 'On it...',
  error: 'I could not understand that..  try to rephrase and send it again.',
  help: `💬💬💬${newLine(1)}Need a quick helper? Need a fast answer to a question?${newLine(
    1
  )}Start conversation with GPT.  Send informative prompts and get answers.${newLine(
    1
  )}💡 _Tip: start with the word gpt and try to make your prompts informative._${newLine(1)}${bold(
    'Examples:'
  )}${newLine(1)}_gpt what is the weather in Paris today?_${newLine(
    1
  )}_gpt please summarize Moby-Dick for my upcoming book report_${newLine(1)}${bold(
    'Related commands:'
  )}${newLine(1)}␥  Send ${bold(
    'gpt-reset'
  )} to reset your gpt history to break context and start fresh.${newLine(2)}_Send ${bold(
    'HELP'
  )} to return to main menu._`,
  reset: `Your'e GPT session has been initialized.  You can start a new conversation.`,
}
