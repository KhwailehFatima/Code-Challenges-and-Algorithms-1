#!/bin/bash

echo "*************************************"
echo "*** Pulling Code Challenge $1 $2***"
echo "*************************************"

motive () {
  echo "Motiviation Quote of Today:"
  curl -s https://motivational-quote-api.herokuapp.com/quotes/random  | jq -r '.quote'
}
motive
echo "*************************************"

topic=$1
number=$2
directory="code-challenges/$topic-challenges"

if [ ! -d "$directory" ];
then
        mkdir code-challenges/$topic-challenges
fi
mkdir -p code-challenges/$topic-challenges/Challenge$2/src/main/java
mkdir -p code-challenges/$topic-challenges/Challenge$2/src/test/java

`which curl` -s https://raw.githubusercontent.com/LTUC/code-challenges-questions/main/code_challenges/$1/challenge$2/README.md > code-challenges/$topic-challenges/challenge$2/README.md
`which curl` -s https://raw.githubusercontent.com/LTUC/code-challenges-questions/main/source/build.gradle > code-challenges/$topic-challenges/challenge$2/build.gradle

echo "// Write here the code challenge solution" >> code-challenges/$topic-challenges/challenge$2/src/main/java/App.java
echo "// Write your test here" >> code-challenges/$topic-challenges/challenge$2/src/test/java/AppTest.java
echo "// Add your whiteboard image here" >> code-challenges/$topic-challenges/challenge$2/whiteboard.md
