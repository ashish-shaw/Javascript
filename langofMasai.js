function masai(n, str) {
  if (
    str[0] == "a" ||
    str[0] == "e" ||
    str[0] == "i" ||
    str[0] == "o" ||
    str[0] == "u"
  ) {
    console.log(str + "hulk");
  } else {
    console.log(str + "thor");
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var str = input[1].trim();
  masai(n, str);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5
    abced`);
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
