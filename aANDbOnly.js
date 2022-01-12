function ab(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "?") {
      if (str[i - 1] == "a" || str[i + 1] == "a") {
        str[i] = "b";
      } else {
        str[i] = "a";
      }
    }
  }

  return str.join("");
}

function runProgram(input) {
  // Write code here
  var str = input.trim().split("");
  console.log(ab(str));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`?a?a???`);
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
