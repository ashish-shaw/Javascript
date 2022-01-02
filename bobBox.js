function BobBox(n) {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  } else {
    return BobBox(n - 1) + BobBox(n - 3) + BobBox(n - 5);
  }
}

function runProgram(input) {
  // Write code here
  var n = +input[0];
  console.log(BobBox(n));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`7`);
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
