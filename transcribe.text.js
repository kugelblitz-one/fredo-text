module.exports = {
  welcome:
    '🔊🔊🔊\nGot a voice message in the middle of a meeting?\nForward to Fredo for a quick transcription.\n\n' +
    'English and Hebrew are supported and auto detected.\n\n' +
    '_💡 Tip: The transcribed message and audio file will be sent to your brain dump platform if you have one setup._ \n\n' +
    '_Send *HELP* to return to main menu._',
  error: "I can't transcribe this, It might be the audio quality or the format. \nSeems like there is nothing I can do about it.",
  please_wait: 'Transcribing...',
  transcription_result: 'Please see below the transcription result',
  openai_error: 'We use Whisper for transcribing messages.\n seems like their service is currently not working as expected.\nPlease try again in 30 minutes.',
  too_long: `Sorry! Your audio is too long for our system to transcribe.\nMaybe try cutting it down to 25MB or less - that's the longest audio our system can handle!`,
  send_to_note: 'I will send this to your default notes address.'
  
}
