# sparql-spin-js3 - An integration of the SPIN vocabulary/SPARQL parser designed for the js3 RDF library #

## Requirements ##
* Node.js installed (You can set the command for Node.js in Makefile if you like, or like `make NODEJS=/path/to/nodejs`)
* [js3 library](https://github.com/webr3/js3) (This isn't strictly needed, just get rid of the three lines at the top of src/sparql.header.js if you really want to.)

## Building ##
Simply run `make`.

Building the parser is done in two steps: PEG does not come with ready sources, the appropriate files have to be appended together and modified. We don't use the Rakefile because it depends on Ruby and other stuff to be installed. Plus it's simpler.

## Usage ##

The finished peg.node.js can be used as a Node.js module, it's recommended you symlink that to 'peg.js' if you require it from a script.

The finished SPARQL parser is found in sparql.js (and also symlinked by index.js so you can just require() the directory) and accessed with the `parse` call:
        var sparqlParser=require('sparql');
        var query = sparqlParser.parse(query).ref('_:query');

