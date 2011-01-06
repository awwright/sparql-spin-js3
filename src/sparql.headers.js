var js3 = require('js3');
js3.curiemap.sp = "http://spinrdf.org/sp#";
js3.propertymap.sp = ['where', 'resultVariables', 'resultNodes', 'templates', 'graphIRI', 'deletePattern', 'insertPattern', 'varName', 'expression', 'subject', 'predicate', 'path', 'object', 'variable', 'elements', 'graphNameNode', 'query', 'serviceURI'];

function rdfCollection(v){
	return v.toList();
}

module.exports=
// @include "sparql.parseroutput.js"
