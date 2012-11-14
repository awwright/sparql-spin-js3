// Label an Array as an RDF Collection and
// not just multiple objects to the same predicate
function rdfCollection(v){
	return v.toList?v.toList():{"@list":v};
}

// @include "sparql-parser.js"
