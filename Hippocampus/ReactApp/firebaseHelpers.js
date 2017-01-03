
import Firestack from 'react-native-firestack'

	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))


module.exports._updateEntry = (table, key, newData) => {
  firestack.database.ref(table).child(key).update(newData);
}
//need to get key through not hardcode when we invoke this in cardDetail
