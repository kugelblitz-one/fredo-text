module.exports = {
  followLink: link => `Follow this link to add this reminder to your calendar. ${link}.`,
  WouldYouLike: 'Would you like reminders to show up in your calendar?',
  whereSendInvite: 'Where should I send the invite?',
  whatCalendarUse: 'What calendar do you use?',
  includeNextTime: 'Would you like me to include such links next time you set a reminder?',
  WillDo: 'Will do.',
  reminderRequestOption: `No problem. If you ever change your mind, just send *calendar* and follow the instructions.`,
  sendInviteTo: defaultEmailNotes => `Should I send the invite to ${defaultEmailNotes}`,
  whatYourEmail:
    "What's your email address?\n\n(by providing your email address you are giving your consent to our usage of your email per our terms of use and privcay policy)",
  ThatsNotValidEmail: "That's not a valid email address. Would you like to try again?",
  greatSentInvitesToEmail: email =>
    `Great.\nWould you like all your reminders sent as invites to ${email}?`,
  NoProblem: 'No problem.',
}
