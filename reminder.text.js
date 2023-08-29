const { newLine, bold } = require('./helper.js')

module.exports = {
  welcome: `⏰⏰⏰ ${bold('Need a reminder?')}${newLine()}
  Tell Fredo ${bold('what')} your reminder is about, and ${bold('when')} you need to be reminded.
  When the time comes, Fredo will send you a reminder message (that you can snooze).${newLine(
    2
  )}Check these important tips:`,
  /**
   * @param {number} number
   * @param {'minutes' | 'hours' | 'days'} type
   * @param {string} text
   */
  remindInA: (number, type, text) => `I will remind you in ${number} ${type}: ${newLine()}${text}`,
  remindOnDateTime: (date, time, text) =>
    `I will remind you on ${date} at ${time}:${newLine()}${text}`,
  invalidMessage: `You used an invalid reminder template or we could not understand the reminder date and time.\n\n
  *Examples:*\n
  remind me to pick up Jerry today @4pm
  reminder 07-Sep-2023 08:00 breakfast at Tiffany`,
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
  /**
   * @param {'tomorrow' | 'today'} type
   * @param {string} time
   * @param {string} text
   */
  remindTodayOrTomorrowAt: (type, time, text) =>
    `I will remind you ${type} at ${time}:${newLine()}${bold(text)}`,
  cancelCustom:
    "No problem.\nIf you need, you can always send 'reminder' to view all your existing reminders.",
  youCanCancelLast: `You can *Cancel last reminder* or click *My reminders* for more options.`,
  cancelLastReminder: (dateTime, content) =>
    `Cancelled the Reminder for:\n${dateTime} - ${content}`,
  cancelSession: `Sure, anytime you need just send *reminders* to come back to the reminder options.`,
  reminderListForCancel: `Which reminder to cancel? send the number of the reminder.\n(e.g. sending 1 will delete the first reminder in the list)\n\n`,
  deletedReminderSuccessfully: (dateTime, content) =>
    `${content} ${dateTime}\nDeleted reminder successfully!`,
  selectedInvalidNumberIsNumber:
    "You selected a reminder that does not exist.\n select a number from the list below or send 'cancel' to go back.",
  selectedInvalidNumberIsNotNumber:
    "You need to chose a number to select a reminder to delete.\nYou can send 'cancel' to go back.",
  reminderIsPast: 'Reminder is past due.',
  messageInFirstReminder:
    "Congrats on your first reminder 🎉\n\nNow, let's level it up with these features:\n\n1. Click *Edit Timezone* if your reminders have gone loco.\n2. Tap *Calendar* to add reminders to your schedule.\n3. Hit *Cancel reminders* to remove that last reminder blunder.\n\nFeel free to holler if you need help. Stay sassy, stay organized! 💃",
  tip1: '💡 *Tip #1:*\nYour reminder request must start with the word *remind* or *reminder*.\nBe specific about what and when.\n\n*Examples:*\nremind me to pick up Jerry today @4pm\n\nreminder 07-Sep-2023 08:00 breakfast at Tiffany',
  tip2: '💡 *Tip #2:*\nWant your reminders in your calendar as well?\nsend "calendar" to set it up',
}
