function eto(a, b) {
  if (b == 0) {
    return 1;
  }

  var digit = degree(a, b);
  var res = digit / factorial(b) + eto(a, b - 1);
  return res;
}

function factorial(X) {
  if (X == 0 || X == 1) {
    return 1;
  }
  return X * factorial(X - 1);
}

function degree(a, b) {
  return a ** b;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [a, b] = input[0].trim().split(" ").map(Number);
  console.log(eto(a, b).toFixed(4));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`4 2`);
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
