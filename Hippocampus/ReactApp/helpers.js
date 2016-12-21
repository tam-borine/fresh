'use strict';

const HELPERS = {
	objIsEmpty: (obj) => {
	  for(let prop in obj) {
	    if(obj.hasOwnProperty(prop))
	      return false;
	  }
	  return true;
	},

	objToArr: (obj) => {
	  return Object.keys(obj).map(function(k) { return obj[k] });
	},

	firstIndexInObj: (obj) => {
	  for (let a in obj) return a;
	},
}

module.exports = HELPERS;
module.exports.details = {
	title: 'HELPERS'
}