function SNE(n, arr) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        count++;
        break;
      }
    }
  }
  console.log(n - count);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  SNE(n, arr);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`8
      39 27 11 4 24 32 32 1`);
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
