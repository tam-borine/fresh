//make a component that takes a table, entry in table,
// and the properties to update

//for now aim to change Report's status

//pass in 'posts/' and key from wherever invoked

// Component into file from card file

import Firestack from 'react-native-firestack'
	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))


module.exports._updateEntry = (table, key, propertyToUpdate) => {

  firestack.database.ref(table + '/' + key + '/' + propertyToUpdate).update(true);


  console.log("yay update entry was called wohooo")

}
