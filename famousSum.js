function famous(str) {
  if (str.length == 0) {
    return 0;
  }
  if (str.length == 1) {
    return Number(str);
  }
  var temp = 0;
  for (var i = 0; i < str.length; i++) {
    temp += Number(str[i]);
  }
  var temp1 = temp.toString();
  return famous(temp1);
}

function runProgram(input) {
  // Write code here

  var [n, k] = input.trim().split(" ");
  var str = 0;
  for (var i = 0; i < n.length; i++) {
    str += Number(n[i]);
  }
  str *= k;
  console.log(famous(str.toString()));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`148 3`);
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
