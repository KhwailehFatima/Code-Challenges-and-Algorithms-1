#!/bin/bash

echo "***************************************"
echo "*** Pulling Code Challenge $1 $2***"
echo "***************************************"

motive () {
  echo "Motiviation Quote of Today:"
  curl -s https://motivational-quote-api.herokuapp.com/quotes/random  | jq -r '.quote'
}
motive
echo "***************************************"

topic=$1
number=$2
directory="code-challenges/$topic-challenges"

if [ ! -d "$directory" ];
then
        mkdir code-challenges/$topic-challenges
fi
mkdir -p code-challenges/$topic-challenges/challenge$2

`which curl` -s https://ltuc.github.io/code-challenges-questions/code_challenges/$1/challenge$2/README.md > code-challenges/$topic-challenges/challenge$2/README.md

echo "// Write here the code challenge solution" >> code-challenges/$topic-challenges/challenge$2/challenge$2.js
echo "// Write your test here" >> code-challenges/$topic-challenges/challenge$2/challenge$2.test.js
echo "// Add your whiteboard image here" >> code-challenges/$topic-challenges/challenge$2/whiteboard.md