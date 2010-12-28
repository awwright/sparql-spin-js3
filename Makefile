NODEJS = node

all: sparql.js index.js

peg.node.js: src/peg.node.headers.js submodules pegjs/src/*.js
	cat src/peg.node.headers.js pegjs/src/utils.js pegjs/src/parser.js pegjs/src/compiler.js pegjs/src/checks.js pegjs/src/passes.js pegjs/src/emitter.js > peg.node.js

sparql.js: peg.node.js lib/parse.js src/sparql.peg src/sparql.headers.js
	cat src/sparql.headers.js > sparql.js
	$(NODEJS) lib/parse.js >> sparql.js

index.js: sparql.js
	ln -s sparql.js index.js

submodules:
	git submodule update --init

clean:
	rm peg.node.js sparql.js index.js
