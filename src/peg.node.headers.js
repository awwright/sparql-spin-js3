var PEG = {};
module.exports = function(grammar) {
	return PEG.compiler.compile(PEG.parser.parse(grammar));
}
