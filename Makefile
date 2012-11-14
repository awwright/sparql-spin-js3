NODEJS = node

all: lib/sparql-parser-node.js

pegjs/lib/parser.js: pegjs/src/parser.pegjs
	cd pegjs && $(MAKE) parser

lib/sparql-parser-node.js: src/sparql.headers.js lib/sparql-parser.js
	cat src/sparql.headers.js lib/sparql-parser.js >$@

lib/sparql-parser.js: src/sparql.peg
	$(NODEJS) pegjs/bin/pegjs <$< >$@

pegjs/src/parser.pegjs:
	git submodule update --init

clean:
	rm -f lib/sparql-parser-node.js lib/sparql-parser.js

update:
	git submodule update

.PHONY : all clean update
