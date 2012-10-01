var vows=require('vows');
var assert=require('assert');
var sparqlParser=require('..');
var rdf=require('rdf');
rdf.setBuiltins();

var p = sparqlParser.parse;

vows.describe('Checking pattern').addBatch({
'Query0001':
	{ topic: p("SELECT * {?x a ?z}")
	, 'Variable list empty 1': function(t){ assert.isUndefined(t["http://spinrdf.org/sp#resultVariables"]); }
	, 'Variable list empty 2': function(t){ assert.isEmpty(t["sp:resultVariables"]); }
	, 'a == "sp:Select"': function(t){ assert.equal(t.a, "sp:Select"); }
	, '.ref is Function': function(t){ assert.isFunction(t.ref); }
	//, 'Log': function(t){ console.log(t); }
	, ".ref()":
		{ topic: function(t){ return t.ref('_:query'); }
		, 'Variable list empty 1': function(t){ assert.isUndefined(t["http://spinrdf.org/sp#resultVariables"]); }
		, 'Variable list empty 2': function(t){ assert.isEmpty(t["sp:resultVariables"]); }
		, 'a == "sp:Select"': function(t){ assert.equal(t.a, "sp:Select"); }
		, '.graphify is Function': function(t){ assert.isFunction(t.graphify); }
		, '.graphify()':
			{ topic: function(t){ return t.graphify(); }
			//, 'Log': function(t){ t.forEach(function(v){console.log(v.toString());}); }
			, '.filter is Function': function(t){ assert.isFunction(t.filter); }
			, 'length': function(graph){assert.strictEqual(graph.length, 9);}
			}
		}
	}
}).export(module);
