"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  const games = scores;
  let nbrBestRecords = 0;
  let bestRecord = games[0];
  let nbrWorstRrecords = 0;
  let worstRecord = games[0];

  games.map((score, index) => {
    if (bestRecord < score) {
      bestRecord = score;
      nbrBestRecords = nbrBestRecords + 1;
    }
    if (worstRecord > score) {
      worstRecord = score;
      nbrWorstRrecords = nbrWorstRrecords + 1;
    }
  });

  return [nbrBestRecords, nbrWorstRrecords];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
