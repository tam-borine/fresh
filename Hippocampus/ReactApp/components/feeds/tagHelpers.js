
// Method to check User Input for Hashtag and returns word associated with it
module.exports._grabHashtagIfExists = (textInput) => {
  			var regex = /(^#|\s#)([a-z0-9]+)/gi
  			var matchesArray = textInput.match(regex) // only matches first occurance
  			var caseString = matchesArray[0] //without HASH THIS BLOWS UP
  			var finalString = caseString.split(" ").pop()
  			return finalString
  	}

// Goes through DB to find if there are any instances of Pt Alias (hashtag)
// in the "cases" node, returns 2D array of their key and value if there are
// e.g. [[key, Pt Alias][key, Pt Alias]...]
module.exports._searchFirebase = (firestack, hashtaggedWord) => {
  var aliasArray = []
  return new Promise((resolve, reject) => {
    firestack.database.ref("cases").on('value', (snapshot) => {
      const data = snapshot.value
      for (k in data) {
        aliasArray.push([k, data[k]["Pt alias*"]]) //#afb
      }
      const casePrimaryKey = module.exports._findMatchingCase(aliasArray, hashtaggedWord)
      //async so must be called here
      console.log(casePrimaryKey);
      console.log("casePrimaryKey from searchFirebase resolved above");
      resolve(casePrimaryKey)
      //check firebase docs for error handling .catch after .on() ?
    })
  })
}

// Takes the 2D array and User input hashtag and sees if any match
// if they do it assigns the post_id key to that case,
// if not returns pop up that informs user this is the first time
// this case has been used and they should go to createCaseForm
module.exports._findMatchingCase = (aliasArray, hashtaggedWord) => {
		for (var i = 0; i < aliasArray.length; i++) {
      var firebaseCaseStr = aliasArray[i][1].trim()
      if (firebaseCaseStr == hashtaggedWord) {
        return aliasArray[i][0] //primarykey of case
    	}
		}
  }




    // else {
    //   console.log("Redirect to new case scene")
    //   // Have a pop up to make a new case and
    //   //make sure it's finished before we...
    //
    //   // Then send over the case_id key so when case is made has right link
    //   return aliasArray[i][0]// << User inputted case key with hashtag
    // }
