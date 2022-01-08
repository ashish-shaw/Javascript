function SymmetricOrNot(N,mat) {
   for(var i = 0; i<N/2; i++) {
       for(var j = i; j<N-i-1; j++) {
          var temp = mat[i][j];
          mat[i][j] = mat[N-i-1][j];
          mat[N-i-1][j] = mat[N-i-1][N-j-1];
          mat[N-i-1][N-j-1] = mat[i][N-j-1];
          mat[i][N-j-1] = temp;
       }
   }
console.log(temp);
}



function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var testcases = +input[0];
    var line = 1;
    for(var i = 0; i<testcases; i++) {
        var N  = +input[line];
        line++;
        var mat = [];
        for(var j = 0; j<N; j++) {
            mat.push(input[line].trim().split(" ").map(Number));
            line++;
        }
        SymmetricOrNot(N,mat)
    }
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`4
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110`);
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
  
  