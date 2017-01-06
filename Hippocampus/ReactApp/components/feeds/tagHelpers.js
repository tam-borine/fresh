
module.exports._hashTagHandler = (textInput, firestack) => {
  	 var hashtaggedWord = module.exports._grabHashtagIfExists(textInput)
  	 if (hashtaggedWord) {
  		 module.exports._searchFirebase(firestack, hashtaggedWord)
  	 } else { //post doesn't involve case so move on like nothing happened
  		 return
  	 }
   }
module.exports._grabHashtagIfExists = (textInput) => {
  			var regex = /(^#|\s#)([a-z0-9]+)/gi
  			var matchesArray = textInput.match(regex) //only matches first occurance
  			var caseString = matchesArray[0] //without HASH THIS BLOWS UP
  			var finalString = caseString.split(" ").pop()
  			return finalString
  	}
module.exports._searchFirebase = (firestack, hashtaggedWord) => {
  		var aliasArray = []
  		firestack.database.ref("cases").on('value', (snapshot) => {
  		const data = snapshot.value
  		for (k in data) {
  			aliasArray.push([k, data[k]["Pt alias*"]])
  		}
      module.exports._makeOrUpdateCase(aliasArray, hashtaggedWord)
      //async so must be called here
  	 })
  	}
  //array = casesWithAlias# = [[idkey, data], []]
module.exports._makeOrUpdateCase = (arrayOfArrays, caseStr) => {
  		for (var i = 0; i < arrayOfArrays.length; i++) {
        console.log(arrayOfArrays);
        var firebaseCaseStr = arrayOfArrays[item][1].replace(" ","")
        if (firebaseCaseStr == caseStr) {
          return array[i][0] //case key with hashtag
      	} else {
      		console.log("Redirect to new case scene")
      		// Have a pop up to make a new case
          //above must be done before returning below
          return array[i][0]//case key with hashtag
      	}
  		}
  	}
