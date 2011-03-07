try{
	var js3 = require('js3');
	js3.curiemap.sp = "http://spinrdf.org/sp#";
	js3.propertymap.sp = ['where', 'resultVariables', 'resultNodes', 'templates', 'graphIRI', 'deletePattern', 'insertPattern', 'varName', 'expression', 'subject', 'predicate', 'path', 'object', 'variable', 'elements', 'graphNameNode', 'query', 'serviceURI'];
}catch(e){}

// Label an Array as an RDF Collection and
// not just multiple objects to the same predicate
function rdfCollection(v){
	return v.toList?v.toList()||v;
}

module.exports=
// @include "sparql.parseroutput.js"
