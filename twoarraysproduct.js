function twoarraysproduct(n, arr1, arr2) {
  var count = 0;
  var prod = 1;
  for (var i = 0; i < n; i++) {
    prod *= arr1[i] * arr2[i];
  }
  return prod;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    var arr1 = input[line].trim().split(" ").map(Number);
    line++;
    var arr2 = input[line].trim().split(" ").map(Number);
    line++;
    console.log(twoarraysproduct(n, arr1, arr2));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`1
    3
    1 2 3
    2 3 1`);
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
