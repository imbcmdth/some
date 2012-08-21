(function (root, factory) {
		"use strict";

		if (typeof exports === 'object') {
			module.exports = factory(require('string'), require('array'));
		} else if (typeof define === 'function' && define.amd) {
			define(['string', 'array'], factory);
		} else {
			root.Some = factory.call(root, root.StringSome, root.ArraySome);
		}
	}(this, function(StringSome, ArraySome) {
		"use strict";

		// clean up the global scope if it got dirty
		//if(this.StringSome) delete this.StringSome;
		//if(this.ArraySome) delete this.ArraySome;

		return {
			"String" : StringSome,
			"Array" : ArraySome
		};
}));