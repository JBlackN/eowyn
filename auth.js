(function() {
  if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=' + fitbitClientId + '&redirect_uri=' + fitbitCallbackURI + '&scope=activity%20location%20profile%20settings%20social&expires_in=600');
  }
})();
