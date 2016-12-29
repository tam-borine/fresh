import OAuthManager from 'react-native-oauth';
var env = require('../environment.js')

const config =  {
  facebook: {
    client_id: env.getKey('FB_ID'),
    client_secret: env.getKey('FB_SECRET')
  },
  google: {
  	callback_url: env.getKey('GGL_CALLBACK_URL'), //this callback redirect url might need to change for Android. See react-native-oauth's docs.
  	client_id: env.getKey('GGL_KEY'),
  	client_secret: env.getKey('GGL_SECRET')
  }
}

const manager = new OAuthManager('Hippocampus')
manager.configure(config);

module.exports.authenticateViaFb = () => {
	manager.authorize('facebook')
		.then(resp => console.log(resp))
		.catch(err => console.log(err));	
}


module.exports.authenticateViaGoogle = () => {
	manager.authorize('google', {scopes: 'profile email'})
		.then(resp => console.log(resp))
		.catch(err => console.log(err));	
}
