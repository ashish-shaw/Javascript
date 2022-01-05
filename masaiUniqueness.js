function masaiuniqueness(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }
  //console.log(obj);
  var count = 0;
  for (key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }
  //console.log(count);
  if (count >= 1) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}

function runProgram(input) {
  // Write code here
  var str = input.trim();
  masaiuniqueness(str);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`masai`);
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
