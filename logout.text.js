module.exports = {
  areYouSureLogout(platform = 'Fredo') {
    return `Are you sure you want to logout from ${platform}? \n(This means your current saved settings will be lost)`
  },
  yesLogout: `🔌 Ok You are logged out now.\n\n'Before you go, you can explore some other skills Fredo has to offer.`,
  noLogout: 'Yay. Happy to see you stay. Enjoy Fredo.',
}
