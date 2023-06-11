const { newLine, bold } = require('./helper.js')

module.exports = {
  welcome: `⏰⏰⏰${newLine()}Need a reminder? Tell Fredo ${bold('when')} and ${bold(
    'what'
  )} and when the time comes, Fredo will send you a message.${newLine(
    2
  )}_💡 Tip: start with the word ${bold('remind')} or ${bold(
    'reminder'
  )} and specify after that when and what._${newLine(2)}${bold(
    'Examples:'
  )}${newLine()}_remind me to pick up Jerry today @4pm_${newLine()}_reminder 07-Sep-2023 08:00 breakfast at Tiffany_ ${newLine(
    2
  )}_Send ${bold('HELP')} to return to main menu._`,
  welcome2: `Note: You can always explore more stuff... ${newLine(2)}💡 Send ${bold(
    'Howto'
  )} to explore more skills ${newLine()}💡 Need help? Just send ${bold('Help')}`,
  /**
   *
   * @param {number} number
   * @param {'minutes' | 'hours' | 'days'} type
   * @param {string} text
   * @returns
   */
  remindInA: (number, type, text) => `I will remind you in ${number} ${type}: ${newLine()}${text}`,
  remindOnDateTime: (date, time, text) =>
    `I will remind you on ${date} at ${time}:${newLine()}${text}`,
  invalidMessage: `You used an invalid reminder template`,
  customSnoozePrompt: `When do you want to get this reminder again?${newLine(2)}💡${bold(
    'Tip'
  )}: send the time you wish to get snoozed (e.g 3 hours, 30 minutes, tomorrow, 01-Feb-2023 at 8 AM)`,
  noReminders: `No reminders to show.${newLine()}You can easily create one :)`,
  yourReminders: `Your reminders:${newLine()}`,
  sendReminder: reminder =>
    `⏰ You asked Fredo to remind you to:${newLine()}${reminder}${newLine(
      2
    )}You can snooze it with the options below.`,
  remindInOneHour: text => `I will remind you in 1 hour:${newLine()}${bold(text)}`,
  remindTomorrow8am: text => `I will remind you tomorrow @8AM:${newLine()}${bold(text)}`,
  currentTimezone: timezone => `Your reminders are based on your local timezone: ${bold(timezone)}`,
  whatYourLocation: `Please tell us what is your location?`,
}
