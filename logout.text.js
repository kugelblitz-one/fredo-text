module.exports = {
  areYouSureLogout(platform = 'Fredo') {
    return `Are you sure you want to reset your ${platform} setup? \n(This means your current saved settings will be lost)`
  },
  yesLogout: `🔌 Ok Your notes forwarding setup has been deleted now.\n\nAnything you send Fredo as a note will be kept here like a group with yourself.\n\nIn case you want to setup notes forwarding again send *notes*.`,
  noLogout: 'Sure. Enjoy Fredo.',
}
