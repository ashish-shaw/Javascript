function boats(p, w, warr) {
  warr.sort((a, b) => a - b);
  var countboat = 0;
  var l = 0;
  var r = warr.length - 1;

  while (l <= r) {
    if (warr[l] + warr[r] <= w) {
      r--;
      l++;
    } else {
      r--;
    }
    countboat++;
  }
  return countboat;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [p, w] = input[line++].trim().split(" ").map(Number);
    var warr = input[line++].trim().split(" ").map(Number);
    console.log(boats(p, w, warr));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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
