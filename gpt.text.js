const { newLine, bold, italicize } = require('./helper.js')

module.exports = {
  processor: 'On it...',
  error: 'I could not understand that..  try to rephrase and send it again.',
  help:
    `💬💬💬${newLine(1)}Need a quick helper? Need a fast answer to a question?` +
    `${newLine(2)}Start conversation with GPT.  Send informative prompts and get answers.` +
    `${newLine(
      2
    )}💡 _Tip: start with the word gpt and try to make your prompts informative._${newLine(
      2
    )}${bold('Examples:')}${newLine(1)}_gpt what is the weather in Paris today?_${newLine(
      1
    )}_gpt please summarize Moby-Dick for my upcoming book report_${newLine(2)}${bold(
      'Related commands:'
    )}${newLine(1)}␥  Send ${bold(
      'gpt-reset'
    )} to reset your gpt history to break context and start fresh.${newLine(2)}_Send ${bold(
      'HELP'
    )} to return to main menu._`,

  reset: `Your'e GPT session has been initialized. You can start a new conversation.`,
  failedResponseByOpenAi:
    'Seems like GPT service is not responding to us.\nPlease try again in few minutes.',
  failedResponseByOther:
    'This is awkward, something went wrong.\nWe are looking into it now.\n\n💡You can start a new session by sending *gpt* followed by your prompt.',
  startSession: 'Starting ChatGPT session... \nTo end it send *End chat* at any point.',
  closeSession:
    'GPT session has ended. If you want to start a new session just send *gpt* followed by your prompt.',
  youCanSendCancel:
    'Note: To end ChatGPT session tap *End chat*.\nOtherwise, continue the conversation.',
  TapEndChatToClose: 'Tap *End chat* to end ChatGPT session.',
  forceClose: 'Closing chatGPT session',
  isItSendTranscribeToGpt: 'Should I send the audio to ChatGPT as part of the conversation?',
  sendTranscribeToGpt: 'Transcribe the message and send it to GPT',
  dontSendTranscribeToGpt: 'Close session and transcribe the message',
}
