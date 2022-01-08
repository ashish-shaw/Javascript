function takeoutmax(N,k,arr) {
    var max = 0;
    var sum = 0;
    
}



function runProgram(input) {
    input = input.trim().split("\n");
    var [N,k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    takeoutmax(N,k,arr)
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
  
  