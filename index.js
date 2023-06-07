// add text files here
module.exports = {
  tldr: require('./tldr.text.json'),
  share: require('./share.text.json'),
  gpt: require('./gpt.text.js'),
  helper: require('./helper.js'),
  contact: require('./contact.text.json'),
  image: require('./image.text.js'),
  imageToText: require('./imageToText.text.js'),
  reminder: require('./reminder.text.js'),
  note: require('./note.text.js'),
  templates: {
    verifyCode: require('./templates/verifyCode.tamplate')
  }
  errors: require('./errors.text.js'),
}
