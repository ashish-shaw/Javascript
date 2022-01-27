function attendence(pro, marks) {
  if (marks == null || marks.length == 0) {
    return 0;
  }
  if (marks.length == 1) {
    return marks[0];
  }
  if (marks.length == 2) {
    return Math.max(marks[0], marks[1]);
  }

  var dp = new Array(marks.length);
  dp[0] = marks[0];
  dp[1] = Math.max(marks[0], marks[1]);

  for (var i = 2; i < dp.length; i++) {
    dp[i] = Math.max(marks[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[marks.length - 1];
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 1; i <= t; i++) {
    var pro = +input[line++];
    var marks = input[line++].trim().split(" ").map(Number);
    console.log("Case " + i + ":" + " " + attendence(pro, marks));
    // console.log(attendence(pro, marks));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`2
    5
    1 2 3 4 5
    1
    10`);
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
