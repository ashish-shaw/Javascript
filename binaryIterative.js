function binaryIterative(n, key, arr) {
  for (var i = 0; i < n; i++) {
    if (arr[i] == key) {
      return 1;
    }
  }
  return -1;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [n, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  console.log(binaryIterative(n, key, arr));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5 0
    2 -2 0 3 4`);
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
