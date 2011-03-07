var vows=require('vows');
var assert=require('assert');
var sparqlParser=require('./../sparql.js');

var p = sparqlParser.parse;

vows.describe('SELECT queries').addBatch(
{ 'Resolve "sp:path"': function(){ assert.equal("sp:path".resolve(), "http://spinrdf.org/sp#path"); }
, 'Resolve "path"':
	{ topic: {path: "abc"}.ref('_:test')
	, 'toNT()': function(t){ assert.equal(t.toNT(), '_:test <http://spinrdf.org/sp#path> "abc" .'); }
	}
}
).export(module);
