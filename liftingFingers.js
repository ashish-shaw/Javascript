function fingers(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      continue;
    } else {
      count++;
    }
  }
  return count;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var str = input[line++].trim().split("");
    console.log(fingers(str));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    aaaaa
    abbbaaz`);
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
