const { newLine, bold, italicize } = require('./helper.js')

module.exports = {
  processor: 'On it...',
  error: 'I could not understand that..  try to rephrase and send it again.',
  help:
    `🤖🤖🤖*Chat with GPT*` +
    `${newLine(1)}Have insightful conversations with Fredo, powered by ChatGPT.` +
    `${newLine(2)} *Keyword*`+
    `${newLine(1)}gpt`+
    `${newLine(2)}*Examples*:`+
    `${newLine(1)}gpt help me plan a family trip`+
    `${newLine(1)}gpt Give me inspiring quotes by Churchill`+
    `${newLine(2)}*Related command*:`+
    `${newLine(1)}Send “close” to end the session`,

  reset: `Your'e GPT session has been initialized. You can start a new conversation.`,
  failedResponseByOpenAi:
    'Seems like GPT service is not responding to us.\nPlease try again in few minutes.',
  failedResponseByOther:
    'This is awkward, something went wrong.\nWe are looking into it now.\n\n💡You can start a new session by sending *gpt* followed by your prompt.',
  startSession: 'Starting ChatGPT session... \nTo close it, send/tap ‘close’.',
  closeSession:
    'The GPT session is now closed.',
  youCanSendCancel:
    'Note: To end ChatGPT session tap *close*.\nOtherwise, continue the conversation.',
  TapEndChatToClose: 'Tap *close* to end ChatGPT session.',
  closeSessionOptionInEveryResponse: '*******\nSend *close* to end this session',
  forceClose: 'Closing chatGPT session',
  isItSendTranscribeToGpt: 'Should I send the audio to ChatGPT as part of the conversation?',
  sendTranscribeToGpt: 'Transcribe the message and send it to GPT',
  dontSendTranscribeToGpt: 'Close session and transcribe the message',
}
