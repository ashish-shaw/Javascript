function twice(n, arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  var res = [];
  for (key in obj) {
    if (obj[key] == 1) {
      res = res + key;
    }
  }

  console.log(res);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);

    twice(n, arr);
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
