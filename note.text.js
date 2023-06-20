const { newLine } = require('./helper.js')
module.exports = {
  notes_help: `👍👍👍${newLine()}` +
    `Got an idea, task, link or something else you don't want to forget?${newLine()}` +
    `Use *NOTES* setup to have Fredo send it from WhatsApp to your email or productivity app.${newLine(2)}` +
    `That can be your inbox, or any productivity app that supports *email-to-board* such as *Trello*, *Monday*, *Todoist*, and more.${newLine(2)}` +
    `💡 Tip: With *NOTES* setup, any message (including voice, image or link) will be sent to your forwarded to your email address automatically (you can set multiple addresses).${newLine(2)}` +
    `Send *HELP* to return to main menu`,
  setup_notes:
    `Great!${newLine()}` +
    `I am here to help you quickly offload your thoughts and tasks to where they belong. ${newLine(2)}` +
    'Select a platform you use to manage your tasks.' +
    `(e.g. '1' or 'one' or 'Email' for Email integration):${newLine(2)}` +
    `1️⃣  Email${newLine()}` +
    `2️⃣  Trello${newLine()}` +
    `3️⃣  Monday${newLine()}` +
    '4️⃣  Workflowy',
  unrecognized_answer: 'I can\'t recognize this option 🧐',
  trello_welcome_message: "To start I'll need your Trello's email-to-board link.",
  trello_how_setup_trello_board:
    `How to setup and connect a Trello board with Fredo? ${newLine(2)}` +
    `1. Open the desired *Board* on Trello${newLine()}` +
    `2. Open the *Show Menu*${newLine()}` +
    `3. Click on *More* to see all menu options${newLine()}` +
    `4. Search for *Email-To-Board* settings${newLine()}` +
    `5. Choose the *List* you want new cards to be added to${newLine()}` +
    `6. Copy the *email-to-board link* you get from Trello${newLine()}` +
    `7. Send the *link* here${newLine()}`,
  monday_welcome_message: `Awesome!${newLine()}Now let\'s get your Monday board connected to Fredo.${newLine(2)}` +
    `Once your board is connected you will be able to create and add tasks to Monday board directly from WhatsApp.` +
    `It will only take a minute to setup.`,
  monday_how_set_up: `How to setup and connect a Monday board with Fredo?${newLine(2)}` +
    `1. Open the desired *Board* on Monday ${newLine()}` +
    `2. Go to *Board settings* menu ${newLine()}` +
    `3. Click on *Create items via Email*${newLine()}` +
    `4. Copy *Email address* ${newLine()}` +
    `5. Send the *Email address* to Fredo`,
  trello_invalid_email:
    `We could not connect to the provided email-to-board link.${newLine(2)}` +
    `Please make sure you follow the steps as mentioned in the previous message and try again.${newLine(2)}` +
    `In case you still need help with this setup please contact us at connect@fredo.ai.`,
  please_send_your_email:
    `Please send your email address. ${newLine()}(I'll email you a verification code to make sure it works)`,
  code_sent(email) {
    return `Cool, I sent you a verification code to ${email}, (if you can't see it please look in your spam folder).${newLine(2)}Please type the 4 digits verification code.`
  },
  code_sent_hashtag(email) {
    return `Cool, I sent you a verification code to ${email}, (if you can't see it please look in your spam folder).${newLine(2)}Please type the 4 digits verification code.`
  },
  please_type_verification_code: 'Please type the 4 digits verification code.',
  wrong_code: 'Oops, seems like you entered the wrong code.',
  wrong_code_hashtag: 'Oops, seems like you entered the wrong code.',
  another_email: 'Please type in the email address you wish to connect.',
  cancel_and_reset: 'Ok you can setup your notes anytime by sending *Notes*',
  email_code_success:
    `Amazing! ${newLine(2)}Anything you send to Fredo, will be sent as an Email.` +
    `${newLine(2)}You can keep your inbox sensible by starting with a few words of context which will be used for the email's subject line.`,
  trello_code_success:
    `Sweet! 🍭${newLine(2)}Anything you send me here, I will forward to your Trello board as a new card.${newLine(2)}`+
    `Feel free to send anything now.`,
  monday_code_success:
    `Sweet! 🍭${newLine()}` +
`your *Monday board* is now connected to Fredo as your Default board.${newLine(2)}` +
`You can now add new items to this board by simply sending any text message to Fredo.${newLine()}`+
`Any message sent will be added as a new card to this board.${newLine(2)}`+
`Try sending "Test" in the chat and look for it in your Trello board .`,
  icon_email_sent_to_note: '👍',
  first_message: 'This message is now in your inbox.',
  first_message_help: `Now that Fredo is ready for brain dump, let's check out these other skills.${newLine(2)}💡 Just tap *Help* to view all skills and commands${newLine(2)}If you are all set, feel free to send anything now.`,
  invalid_email:
    `Seems like you sent us an invalid email address.\nMake sure you send a valid email address like *xxxx@xxxxx.xxx* and resend it.`,
  no_listmaps: `No maps exist yet, please enter an email address to configure your default map`,
  only_one_list:
    `Seems like you have only 1 connected Email address on Fredo or none at all.${newLine(2)}` +
    'Note: When Default email address is connected, Fredo will add any message you send as a new email to your Default Email address.',
  map_new_address:
    `In order to map a new Email address  please send us *#YOUR_HASHTAG* followed by <Email address>.${newLine(2)}` +
    `*Example:*\n` +
    `#urgent jhon@gmail.com${newLine(2)}` +
    `The above example will create a new hashtag *#urgent* that is mapped to  *jhon@gmail.com*.`,
  cancel_listmaps: 'You are connected to your Default email now and can add items to it.',
  noticed_hashtag_invalid:
    `This *#hashtag* is not mapped to any email address. ${newLine(2)}` +
    `Please send *Email address* link to map it.`,
  noticed_email_invalid:
    `We could not connect to the provided *email address*. \nPlease try again.`,
  send_item_to_default_address: `Add your text as a new item to Default board?\n`,
  hashtag_mapped(hashtag, address) {
    return `✅ ${hashtag} is now mapped to ${address}`
  },
  use_hashtag(hashtag) {
    return `To use it you can send ${hashtag} followed by the text you want to add.${newLine(2)}` +
      `(e.g. ${hashtag} buy milk)`
  },
  you_can_add_hashtag: `You can add new addresses by tapping "*Map New Address*" below. `,
  select_default_address:
    `Please select an address you wish to be set as your default Email address. ${newLine(2)}` +
    `Note: When Default address is connected, Fredo will send any message you send as a new email to this address${newLine(2)}` +
    `Select an option
     from the list below to proceeed: (e.g.\'1\' or \'one\' for first option):`
  ,
  default_address_changed(hashtag) {
    return `Sweet! 🍭\n` +
      `your <${hashtag}> address is now your Default email address connected to Fredo.\n` +
      `\n` +
      `You can now add new items to this address by simply sending any text message to Fredo.\n` +
      `Any message sent will be sent as a new email to this address.`
  },
  you_are_connect_to_default:
    `You are connected to your Default address.\nYou can send anything now.`
}
