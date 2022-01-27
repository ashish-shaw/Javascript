function searchNumber(arr, a, b) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      count++;
    }
  }
  return count;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var t = +input[2];
  var line = 3;
  var ar = [];
  for (var i = 0; i < t; i++) {
    var [a, b] = input[line++].trim().split(" ").map(Number);
    //console.log(n, arr, i, a, b);

    ar.push(searchNumber(arr, a, b));
  }
  console.log(ar.join(" "));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
