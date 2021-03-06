function compete(n, arr) {
  var count = 0;
  var a = arr[0];
  for (var i = 0; i < n; i++) {
    if (i == 0) {
      if (arr[i] > arr[i + 1]) {
        count++;
      }
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      count++;
      // console.log(count);
    } else if (i == n - 1) {
      if (arr[i] > arr[i - 1]) {
        count++;
      }
    }
  }

  return count;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(compete(n, arr));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`8
    1 2 3 4 2 1 6 5`);
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
