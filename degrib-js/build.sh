#!/bin/bash

cp ../degrib/src/degrib/degrib.bc src/degrib.bc

emcc -o src/include-fs.bc javascript/include-fs.c

emcc -O2 -s ALLOW_MEMORY_GROWTH=1 -o dist/degrib.browser.js --pre-js javascript/pre-browser.js --post-js javascript/post-browser.js src/degrib.bc src/include-fs.bc

emcc -O2 -s ALLOW_MEMORY_GROWTH=1 -o dist/degrib.node.js --pre-js javascript/pre-node.js src/degrib.bc src/include-fs.bc

emcc -O2 -s ALLOW_MEMORY_GROWTH=1 -o dist/degrib.unity.js --pre-js javascript/pre-unity.js --post-js javascript/post-unity.js src/degrib.bc src/include-fs.bc

emcc -O2 -s ALLOW_MEMORY_GROWTH=1 -o dist/degrib.plain.html src/degrib.bc src/include-fs.bc
