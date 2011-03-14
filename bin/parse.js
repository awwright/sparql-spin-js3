var parser = require('./../peg.node.js');
var fs = require('fs');
var grammarFile = process.argv[2]||"src/sparql.peg";
try {
	var out = parser(fs.readFileSync(grammarFile).toString('utf8'));
	var source = out.toSource();
	process.stdout.write(source);
}catch(e){
	console.error("Error:");
	console.error(e);
	process.exit(1);
}
