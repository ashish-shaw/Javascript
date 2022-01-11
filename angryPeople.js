function angryPeople(n, arr) {
  arr.sort((a, b) => a - b);

  var max = -Infinity;
  var res = [];

  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      res.push(arr[i]);
    } else {
      res.unshift(arr[i]);
    }
  }

  for (var j = 0; j < n; j++) {
    var difference = Math.abs(res[j % n] - res[(j + 1) % n]);

    if (max < difference) {
      max = difference;
    }
  }
  return max;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(angryPeople(n, arr));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`4
    5 10 6 8`);
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
