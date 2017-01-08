
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

module.exports._writeSpecificPlaceFirebase = (nodePath, dataObj) => {
	firestack.database.ref(nodePath).set(dataObj).done((succ) => {
		//any async stuff
	},  (err) => {console.log('there was an error: '+ err)});
}

module.exports._writeDataToFirebase = (table, data, actionCallback) => {
	firestack.database.ref().child(table).push(data).done((succ) => {
		if(actionCallback){
			actionCallback();
		}
}, (err) => {console.log('there was an error: '+ err)});

}

// Is the button a cancel button or an archived button?
// ^^^ archive button... cancel is it's name in react-native-vector-icons library
