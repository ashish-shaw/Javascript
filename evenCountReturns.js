function count(n) {
  var step = 0;
  var arr = new Array(n.length);
  for (var i = n.length - 1; i >= 0; i--) {
    if (n[i] % 2 == 0) {
      step++;
      arr[i] = step;
    }
    arr[i] = step;
  }
  return arr.join(" ");
}

function runProgram(input) {
  // Write code here
  var n = input.trim().split("").map(Number);
  console.log(count(n));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`574674546476`);
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
