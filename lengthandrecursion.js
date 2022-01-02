function string(str, index) {
  if (str.length == index) {
    return 0;
  } else {
    return 1 + string(str, index + 1);
  }
}

function runProgram(input) {
  // Write code here
  var str = input.trim().split("");
  var index = 0;
  //console.log(str);
  console.log(string(str, index));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`masaischool`);
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
