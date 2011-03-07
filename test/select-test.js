var vows=require('vows');
var assert=require('assert');
var sparqlParser=require('./../sparql.js');

var p = sparqlParser.parse;


vows.describe('Checking pattern').addBatch({
'SELECT * {?x a ?z}':
	{ topic: p("SELECT * {?x a ?z}").ref('_:query')
	//, 'Output structure': function(t){ console.log(t); }
	//, 'Output NT': function(t){ console.log(t.toNT()); }
	, 'Variable list empty 1': function(t){ assert.isUndefined(t["http://spinrdf.org/sp#resultVariables"]); }
	, 'Variable list empty 2': function(t){ assert.isEmpty(t["sp:resultVariables"]); }
	, 'a == "http://spinrdf.org/sp#Select"': function(t){ assert.equal(t.a.resolve(), "http://spinrdf.org/sp#Select"); }
	, 'a == "sp:Select"': function(t){ assert.equal(t.a, "sp:Select"); }
	, 'has sp:where': function(t){ assert.ok(t["sp:where"]); }
	, 'Graph:':
		{ topic: function(t){return t.graphify();}
		, 'Has index': function(graph){assert.isObject(graph.index); }
		, 'Has _:query': function(graph){assert.isObject(graph.index['_:query']); }
		, 'Has _:query / sp:where': function(graph){assert.isArray(graph.index['_:query']['sp:where']); }
		, '_:query / sp:where':
			{ topic: function(graph){ return {graph:graph, subject:graph.index['_:query']['sp:where'][0]}; }
			, '...exists': function(t){ assert.isObject(t.graph.index[t.subject]); }
			, 'Has /sp:path': function(t){ assert.isArray(t.graph.index[t.subject]['sp:path']); }
			, 'Single /sp:path': function(t){ assert.strictEqual(t.graph.index[t.subject]['sp:path'].length, 1); }
			, '/ sp:path':
				{ topic: function(t){ return {graph:t.graph, subject:t.graph.index[t.subject]['sp:path'][0]}; }
				, '...exists': function(t){ assert.isObject(t.graph.index[t.subject]); }
				, 'Has /rdf:first': function(t){ assert.isArray(t.graph.index[t.subject]['rdf:first'.resolve()]); }
				, 'Single /rdf:first': function(t){ assert.strictEqual(t.graph.index[t.subject]['rdf:first'.resolve()].length, 1); }
				, '/rdf:first == "a"': function(t){ assert.strictEqual(t.graph.index[t.subject]['rdf:first'.resolve()][0], "a"); }
				, 'Has /rdf:rest': function(t){ assert.isArray(t.graph.index[t.subject]['rdf:rest'.resolve()]); }
				, 'Single /rdf:rest': function(t){ assert.strictEqual(t.graph.index[t.subject]['rdf:rest'.resolve()].length, 1); }
				, '/rdf:rest == rdf:nil': function(t){ assert.strictEqual(t.graph.index[t.subject]['rdf:rest'.resolve()][0], "rdf:nil".resolve()); }
				}
			}
		}
	}
}).export(module);
