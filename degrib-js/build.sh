#!/bin/bash

cp ../degrib/src/degrib/degrib.bc src/degrib.bc

emcc -o src/include-fs.bc javascript/include-fs.c

emcc -O2 -o dist/degrib.browser.js src/degrib.bc src/include-fs.bc

emcc -O2 -o dist/degrib.node.js --pre-js javascript/pre-node.js src/degrib.bc src/include-fs.bc
