NODEJS = node

all: lib/sparql-node.js lib/index.js

PEG_SRC = \
	pegjs/src/utils.js \
	pegjs/src/parser.js \
	pegjs/src/compiler.js \
	pegjs/src/checks.js \
	pegjs/src/passes.js \
	pegjs/src/emitter.js

lib/peg.node.js: src/peg.node.headers.js pegjs/VERSION $(PEG_SRC)
	cat src/peg.node.headers.js $(PEG_SRC) > lib/peg.node.js

lib/sparql-parser-node.js: lib/peg.node.js bin/parse.js src/sparql.peg
	cat src/sparql.headers.js > lib/sparql-parser-node.js
	$(NODEJS) bin/parse.js >> lib/sparql-parser-node.js

lib/sparql-node.js: lib/sparql-parser-node.js

lib/index.js: lib/sparql-node.js
	ln -s sparql-node.js lib/index.js

pegjs/VERSION:
	git submodule update --init

clean:
	rm lib/peg.node.js lib/sparql-parser-node.js lib/index.js

update:
	git submodule update

.PHONY : clean update
