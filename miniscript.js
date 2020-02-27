/*
Language: MiniScript
Author: Joe Strout <joe@strout.net>
Description: Syntax-light programming language often embedded in games
*/

var module = module ? module : {};     // shim for browser use

function hljsDefineMiniScript(hljs) {
	var KEYWORDS = {
		keyword:
			'break continue else end for function if in isa then repeat ' +
			'return while',

		built_in:
			'abs acos asin atan ceil char cos floor	log round rnd pi sign ' +
			'sin sqrt str tan hasIndex indexOf len val code remove lower ' +
			'upper replace split indexes values join sum sort shuffle push ' +
			'pop pull range print input time wait locals globals outer yield',

		literal:
			'true false null'
	};

	return {
		aliases: ['miniscript'],
		keywords: KEYWORDS,
		contains: [
			hljs.NUMBER_MODE,
			hljs.HASH_COMMENT_MODE,
			{
				className: 'comment',
				begin: /"""/, end: /"""/
			},
			hljs.QUOTE_STRING_MODE,
			{
				variants: [
					{
						className: 'function',
						beginKeywords: 'function'
					}
				],
				end: /:/,
				contains: [
					hljs.UNDERSCORE_TITLE_MODE
				]
			}
		]
	};
}

module.exports = function(hljs) {
    hljs.registerLanguage('miniscript', hljsDefineMiniScript);
};

module.exports.definer = hljsDefineMiniScript;
