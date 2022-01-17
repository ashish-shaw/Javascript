function MasaiAirlines(n, checkin, hand) {
  for (var i = 0; i < n; i++) {
    if (checkin[i] <= 15 && hand[i] <= 7) {
      console.log("Boarding");
    } else {
      console.log("Stop");
    }
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var n = +input[0];
  var checkin = input[1].trim().split(" ").map(Number);
  var hand = input[2].trim().split(" ").map(Number);
  MasaiAirlines(n, checkin, hand);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
