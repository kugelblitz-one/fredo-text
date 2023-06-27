module.exports = {
    "ignore_turn_on": "Fredo will disregard messages and keep them here in the chat - like a group with your self.\n\n" +
        "👉 Send Fredo *ignore* again if you want to switch notes forwarding back on.",
    "ignore_turn_off": "Ignore is turned off.\n" +
        "Fredo will forward any message you send to your notes setup.\n\n" +
        "You can still use '!' to ignore specific messages.\n" +
        "example: \"*! save a number*\" will not be forwarded.\n\n" +
        "👉  Send Fredo *ignore* if you want to  turn ignore back on.",
    "ignore_works_only_for_notes" : "Ignore works only for notes.\n" + 
    "You should setup notes first and then control the forwarding settings.\n\n" +
    "👉 Send  *NOTES*  if you want to start using notes forwarding.",
    change_ignore_to_default_behavior: () => { 
        return `Currently, all your messages are forwarded by default to ${platform_name}.` +
            "You can change this default behavior so only messages with ! are forwarded."  +
            "Would you like to keep this default, or change it?"
    }
}