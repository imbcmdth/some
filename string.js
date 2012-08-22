(function (root, factory) {
		"use strict";

		if (typeof exports === 'object') {
			module.exports = factory(require('reservoir'));
		} else if (typeof define === 'function' && define.amd) {
			define(['reservoir/reservoir'], factory);
		} else {
			root.StringSome = factory(root.Reservoir);
		}
	}(this, function(Reservoir){
		"use strict";
		function _Some(targetString) {
			if(typeof targetString === "undefined") targetString = new String();
			else if(typeof targetString === "string") targetString = new String(targetString);

			function generateMatchIterator(toMatch, str) {
				var matchLength = toMatch.length,
				    currentOffset = -matchLength;
				return function() {
					var result = [];
					currentOffset = str.indexOf(toMatch, currentOffset + matchLength);
					if(currentOffset < 0) return null;
					result[0] = toMatch;
					result.index = currentOffset;
					return result;
				};
			}

			function generateRegexIterator(regex, str) {
				return function() {
					var result = regex.exec(str);
					return result;
				};
			}

			function makeSubstitutionsUsingArray(regexOrString, replaceWith, substitutionList, str) {
				var listIndex = substitutionList.length,
				    stringArray = [str],
				    match, substr;
				while (listIndex--) {
					match = substitutionList[listIndex];
					substr = stringArray.shift();
					stringArray.unshift(substr.slice(match.index + match[0].length));
					stringArray.unshift(match[0].replace(regexOrString, replaceWith));
					stringArray.unshift(substr.slice(0, match.index));
				}
				return stringArray.join("");
			}

			targetString.replaceSome = function(regexOrString, numToReplace, replaceWith) {
				var numToReplace = Math.floor(numToReplace),
				    substitutionList = [],
				    stringMatchIterator = null,
				    item,
				    substitutionList = Reservoir(numToReplace);

				if (Object.prototype.toString.call(numToReplace).slice(8, -1) !== "Number"
				   || numToReplace <= 0) {
					return this;
				}

				// Step 0: Generate an iterator for string matching purposes
				if (Object.prototype.toString.call(regexOrString).slice(8, -1) === "String") {
					// An iterator that uses String.indexOf()
					stringMatchIterator = generateMatchIterator(regexOrString, this);
				} else {
					// Fake an iterator using Regex.exec()
					stringMatchIterator = generateRegexIterator(regexOrString, this);
				}

				// Step 1: Select the replacements we want to use
				while((item = stringMatchIterator()) !== null) {
					substitutionList.pushSome(item);
				}

				// Step 2: Walk through the list of replacements backwards
				// building the new string as we go
				return makeSubstitutionsUsingArray(regexOrString, replaceWith, substitutionList, this);
			};

			return targetString;
		}
		return _Some;
}));