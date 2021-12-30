function easy(n, arr) {
  if (n <= 0) {
    return 0;
  } else {
    return easy(n - 1, arr) + arr[n - 1];
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(easy(n, arr));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
