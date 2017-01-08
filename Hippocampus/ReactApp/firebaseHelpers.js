
import Firestack from 'react-native-firestack'

	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))


module.exports._updateEntry = (table, key, newData) => {
  firestack.database.ref(table).child(key).update(newData);
}

module.exports._foreignKeyUpdater = (table, newData) => {
  firestack.database.ref(table).update(newData);
}
//we are not using this but we could it difers from above only in that it has no .child

//if _writeSpecificPlaceFirebase and _writeDataToFirebase returned promises then async stuff
//can be managed elsewhere and customised more
module.exports._writeSpecificPlaceFirebase = (nodePath, dataObj, asyncCallback) => {
	firestack.database.ref(nodePath).set(dataObj).done((succ) => {
		if(asyncCallback){
			asyncCallback();
		}
	},  (err) => {console.log('there was an error: '+ err)});
}

module.exports._writeDataToFirebase = (table, data, actionCallback) => {
	firestack.database.ref().child(table).push(data).done((succ) => {
		if(actionCallback){
			actionCallback();
		}
	}, (err) => {console.log('there was an error: '+ err)});
}
