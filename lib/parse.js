var parser = require('./../peg.node.js');
var fs = require('fs');
var grammarFile = "src/sparql.peg";
try {
	var out = parser(fs.readFileSync(grammarFile).toString('utf8'));
	var source = out.toSource();
	process.stdout.write(source);
	process.exit(0);
}catch(e){
	console.error("Some error:");
	console.error(e);
	process.exit(1);
}
