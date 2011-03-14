NODEJS = node

all: lib/sparql-node.js lib/index.js

lib/peg.node.js: src/peg.node.headers.js submodules pegjs/src/*.js
	cat src/peg.node.headers.js pegjs/src/utils.js pegjs/src/parser.js pegjs/src/compiler.js pegjs/src/checks.js pegjs/src/passes.js pegjs/src/emitter.js > lib/peg.node.js

lib/sparql-parser-node.js: lib/peg.node.js bin/parse.js src/sparql.peg
	cat src/sparql.headers.js > lib/sparql-parser-node.js
	$(NODEJS) bin/parse.js >> lib/sparql-parser-node.js

lib/sparql-node.js: lib/sparql-parser-node.js

lib/index.js: lib/sparql-node.js
	ln -s sparql-node.js lib/index.js

submodules:
	git submodule update --init

clean:
	rm lib/peg.node.js lib/sparql-parser-node.js lib/index.js
