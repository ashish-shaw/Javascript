function borderless(row,col,mat) {
    var sum = 0;
    for(var i = 1; i<row-1; i++) {
        for(var j = 1; j<col-1; j++) {
            sum = sum + mat[i][j];
        }
    }

    console.log(sum);
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var [row,col] = input[0].trim().split(" ").map(Number);
    var mat = [];
    for(var i = 0; i<row; i++) {
        mat.push(input[i+1].trim().split(" ").map(Number));
    }
    borderless(row,col,mat)
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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
  
  