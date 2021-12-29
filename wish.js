function wish(n, str) {
  var count = 0;
  var a = 0;
  while (a < n) {
    if (
      str[a] == "w" &&
      str[a + 1] == "i" &&
      str[a + 2] == "s" &&
      str[a + 3] == "h"
    ) {
      count++;
    }
    a++;
  }
  console.log(count);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    var str = input[line].trim();
    line++;
    wish(n, str);
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    7
    wishash
    8
    wishwish`);
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
