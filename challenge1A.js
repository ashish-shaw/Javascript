function challenge(n, arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += arr1[i] * arr2[i];
  }
  console.log(sum);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr1 = input[1].trim().split(" ").map(Number);
  var arr2 = input[2].trim().split(" ").map(Number);
  //console.log(n, arr1, arr2);
  challenge(n, arr1, arr2);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
      3 1
      4 3`);
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
