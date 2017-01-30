#!/bin/bash

cp ../degrib/src/degrib/degrib.bc src/degrib.bc

emcc -O2 -o dist/degrib.js --pre-js javascript/pre.js src/degrib.bc