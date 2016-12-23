import OAuthManager from 'react-native-oauth';
var env = require('../environment.js')

const config =  {
  facebook: {
    client_id: env.getKey('FB_ID'),
    client_secret: env.getKey('FB_SECRET')
  },
  google: {
  	client_id: env.getKey('GGL_KEY'),
  	client_secret: env.getKey('GGL_SECRET')
  }
}
// Create the manager
const manager = new OAuthManager('Hippocampus')
// configure the manager
manager.configure(config);

module.exports.authenticateViaFb = () => {
	manager.authorize('facebook')
		.then(resp => console.log(resp))
		.catch(err => console.log(err));	
}
