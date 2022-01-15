function trampoline(n, arr) {
  var dp = new Array(arr.length).fill(-1);
  var step = 0;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (j + arr[j] >= i) {
        dp[i] = j;
        break;
      }
    }
  }

  var res = dp.length - 1;
  while (res > 0) {
    step++;
    res = dp[res];
  }
  return step;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(trampoline(n, arr));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
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
