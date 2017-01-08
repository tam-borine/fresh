module.exports._grabHashtagIfExists = (textInput) => {
  			var regex = /(^#|\s#)([a-z0-9]+)/gi
  			var matchesArray = textInput.match(regex) // only matches first occurance
        if (matchesArray) {
          var caseString = matchesArray[0]
          var finalString = caseString.split(" ").pop()
          return finalString
        }
        return
  	}

module.exports._searchFirebase = (firestack, hashtaggedWord) => {
  return new Promise((resolve, reject) => {
    firestack.database.ref("cases").once('value', (snapshot) => {
      const data = snapshot.value
      var aliasArray = []
      for (k in data) {
        aliasArray.push([k, data[k]["Pt alias*"]]) //pt alias is case hash tag
      }
      const casePrimaryKey = module.exports._findMatchingCase(aliasArray, hashtaggedWord)
      resolve(casePrimaryKey)
    }, (error) => reject(error))
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
