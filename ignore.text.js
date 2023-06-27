module.exports = {
    "ignore_turn_on": "",
    "ignore_turn_off": "",
    "ignore_works_only_for_notes" : "Ignore works only for notes.",
    change_ignore_to_default_behavior: () => { 
        return `Currently, all your messages are forwarded by default to ${platform_name}.` +
            "You can change this default behavior so only messages with ! are forwarded."  +
            "Would you like to keep this default, or change it?"
    }
}