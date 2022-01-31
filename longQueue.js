function long(n, arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
    }
  }
  console.log(count + 1);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  long(n, arr);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`6
    1 2 4 3 5 8`);
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
