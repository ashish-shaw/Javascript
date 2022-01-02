function TaxCollection(N, arr) {
  arr = arr.sort((a, b) => b - a);
  var c = 0;
  for (var i = 0; i < arr.length; i++) {
    c += arr[i];
  }
  console.log(c);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  TaxCollection(N, arr);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    1 3 1 2`);
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
