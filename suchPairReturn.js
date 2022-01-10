function pairReturn(n, k, arr) {
  arr.sort((a, b) => a - b);
  var l = 0;
  var r = arr.length - 1;
  while (l < r) {
    if (arr[l] + arr[r] == k) {
      return 1;
    } else if (arr[l] + arr[r] > k) {
      r--;
    } else if (arr[l] + arr[r] < k) {
      l++;
    }
  }
  return -1;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [n, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(pairReturn(n, k, arr));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`1
    5 2
    3 4 0 2 7`);
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
