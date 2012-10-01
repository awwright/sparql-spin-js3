NODEJS = node

all: lib/sparql-parser-node.js

PEG_SRC = \
	pegjs/src/utils.js \
	pegjs/src/parser.js \
	pegjs/src/compiler.js \
	pegjs/src/checks.js \
	pegjs/src/passes.js \
	pegjs/src/emitter.js

lib/peg.node.js: src/peg.node.headers.js pegjs/VERSION $(PEG_SRC)
	cat src/peg.node.headers.js $(PEG_SRC) >$@

lib/sparql-parser-node.js: lib/peg.node.js bin/parse.js src/sparql.peg lib/sparql-parser.js lib/sparql-node.js
	cat src/sparql.headers.js lib/sparql-parser.js >$@

lib/sparql-parser.js: bin/parse.js
	$(NODEJS) bin/parse.js >$@

pegjs/VERSION:
	git submodule update --init

clean:
	rm lib/peg.node.js lib/sparql-parser-node.js lib/sparql-parser.js

update:
	git submodule update

.PHONY : clean update
