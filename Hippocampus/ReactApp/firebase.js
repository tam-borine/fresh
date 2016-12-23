'use strict';
import Firestack from 'react-native-firestack'


module.exports.testingFirebase = () => {
	const configurationOptions = {
  		debug: true
	};
	const firestack = new Firestack(configurationOptions);
	console.log(firestack)
	firestack.on('debug', msg => console.log('Received debug message', msg))
}