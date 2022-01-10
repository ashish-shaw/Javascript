function dance(b, g, hb, hg) {
  hb.sort((a, b) => a - b);
  hg.sort((a, b) => a - b);

  var i = 0;
  var j = 0;

  while (i < hb.length && j < hg.length) {
    if (hb[i] <= hg[j]) {
      return "NO";
    }
    i++;
    j++;
  }
  return "YES";
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [b, g] = input[line++].trim().split(" ").map(Number);
    var hb = input[line++].trim().split(" ").map(Number);
    var hg = input[line++].trim().split(" ").map(Number);
    console.log(dance(b, g, hb, hg));
  }
}
if (process.env.USERNAME === "ashis") {
  runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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
