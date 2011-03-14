var sparqlParser = require('./sparql-parser-node.js');
exports.parse = sparqlParser.parse;
exports.toSource = sparqlParser.toSource;
exports.SyntaxError = sparqlParser.SyntaxError;
exports.setProperties = function(js3, prefix){
	var prefix = prefix||"sp";
	js3.curiemap[prefix] = "http://spinrdf.org/sp#";
	js3.propertymap[prefix] = ['where', 'resultVariables', 'resultNodes', 'templates', 'graphIRI', 'deletePattern', 'insertPattern', 'varName', 'expression', 'subject', 'predicate', 'path', 'object', 'variable', 'elements', 'graphNameNode', 'query', 'serviceURI'];
}
