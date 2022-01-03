function teamheroes(n, k, arr) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == k) {
        count++;
      }
    }
  }
  if (count >= 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t.length; i++) {
    var [n, k] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    console.log(n, k, arr);
    teamheroes(n, k, arr);
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    5 31
    10 11 13 17 21
    5 44
    10 11 13 17 21`);
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
