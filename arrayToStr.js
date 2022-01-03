function arrTostr(n, arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] == -1 ||
      arr[i] == -2 ||
      arr[i] == -3 ||
      arr[i] == -4 ||
      arr[i] == -5 ||
      arr[i] == -6 ||
      arr[i] == -7 ||
      arr[i] == -8 ||
      arr[i] == -9
    ) {
      str = str + 0;
    } else {
      str = str + arr[i];
    }
  }
  return str;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(arrTostr(n, arr));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5
    2 -4 6 8 -9`);
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
