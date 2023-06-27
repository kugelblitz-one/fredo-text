const { newLine, bold } = require('./helper.js')

module.exports = {
  welcome: (timezone, time) =>
    `Your current timezone is: ${timezone}.${newLine()}Local time: ${time}`,
  whatIsYourTimezone: `What's the time now?${newLine()}(E.g. 16:35, 4:35pm)`,
  afterCancel: (timezone, time) =>
    `Your current timezone is: ${timezone}.${newLine()}Local time: ${time}${newLine(2)}Send ${bold(
      'tz'
    )} anytime you want to edit this.`,
  editSuccess: (timezone, time) =>
    `Great, we have set your new timezone.${newLine()}Your current timezone is: ${timezone}.${newLine()}Local time: ${time}${newLine(
      2
    )}Send ${bold('tz')} anytime you want to edit this.`,
  editField: `I could not parse your local time.${newLine()}Please try again to send me your current local time.${newLine(
    2
  )}Use these format HH:MM.${newLine()}(E.g. 16:35, 04:35pm)
`,
}
