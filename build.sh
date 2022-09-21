#!/bin/bash

ANTLR_JAR="antlr4.jar"

GRAMMAR="Move"
START_RULE="file"
TEST_FILE="test.move"
ERROR_PATTERN="mismatched|extraneous"

if [ ! -e "$ANTLR_JAR" ]; then
  curl https://www.antlr.org/download/antlr-4.7.2-complete.jar -o "$ANTLR_JAR"
fi

mkdir -p target/

java -jar $ANTLR_JAR -no-listener -visitor $GRAMMAR.g4 -o src/
javac -classpath $ANTLR_JAR src/*.java -d target/

