function twosortedarrays(n, arr1, arr2) {
  var l = 0;
  var r = n - 1;
  var count = 0;

  while (l < n && r >= 0) {
    if (arr1[l] < arr2[r]) {
      l++;
    } else if (arr1[l] > arr2[r]) {
      r--;
    } else {
      count++;
      l++;
      r--;
    }
  }
  return count;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    var arr1 = input[line].trim().split(" ").map(Number);
    line++;
    var arr2 = input[line].trim().split(" ").map(Number);
    line++;
    console.log(twosortedarrays(n, arr1, arr2));
    console.log(arr1, arr2);
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
