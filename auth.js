(function() {
  if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=***REMOVED***&redirect_uri=https%3A%2F%2F***REMOVED***%2F&scope=activity%20location%20profile%20settings%20social&expires_in=600');
  }
})();
