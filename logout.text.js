module.exports = {
  areYouSureLogout(platform = 'Fredo') {
    return `Are you sure you want to logout from ${platform}? \n(This means your current saved settings will be lost)`
  },
  yesLogout: `🔌 Ok Your notes forwarding setup has been deleted now.\n\nIn case you want to setup notes forwarding again send *notes*.`,
  noLogout: 'Sure. Enjoy Fredo.',
}
