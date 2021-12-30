function buyticket(str, tc) {
  var q = [];
  for (let i = 0; i < tc; i++) {
    if (str[i][0] == "E") {
      q.push(str[i][1]);
      console.log(q.length);
    } else {
      if (q.length != 0) {
        console.log(q.shift(), q.length);
      } else {
        console.log(-1, 0);
      }
    }
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  var str = [];
  for (let i = 0; i < tc; i++) {
    var [alpha, num] = input[line++].trim().split(" ");
    num = +num;
    str.push([alpha, num]);
  }
  buyticket(str, tc);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
