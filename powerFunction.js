function PowerFunction(a, b) {
  if (b == 0) {
    return 1;
  } else {
    return a * PowerFunction(a, b - 1);
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [a, b] = input[0].trim().split(" ").map(Number);
  console.log(PowerFunction(a, b));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2 4`);
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
