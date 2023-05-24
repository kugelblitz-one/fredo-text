module.exports = {
  welcome:
    '🔊🔊🔊\nGot a voice message in the middle of a meeting?\nForward to Fredo for a quick transcription.\n\n' +
    'English and Hebrew are supported and auto detected.\n\n' +
    '_💡 Tip: The transcribed message and audio file will be sent to your brain dump platform if you have one setup._ \n\n' +
    '_Send *HELP* to return to main menu._',
  file_error:
    "I can't transcribe this.\n" +
    "It might be the audio quality, it's longer than 2 min or maybe I'm just tired.\n" +
    'I will send it as an item to {{platform}}',
  error:
    "I can't transcribe this.\n" +
    "It might be the audio quality, it's longer than 1 min or maybe I'm just tired.\n",
  send_platform: `I will send it as an item to `,
  please_wait: 'Transcribing...',
  transcription_result: 'Please see below the transcription result',
}
