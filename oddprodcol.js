function oddprodcol(r,c,mat) {    
    for(var i = 0; i<r; i++) {
        var prod = 1;  
        for(var j = 0; j<c; j++) {
            if(mat[j][i]%2==1) {
                prod = prod*mat[j][i];
            }
        }
         console.log(prod)
    }
}



function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var[r,c] = input[0].trim().split(" ").map(Number);
    var mat = [];
    for(var i = 0; i<r; i++) {
        mat.push(input[i+1].trim().split(" ").map(Number))
    }
    oddprodcol(r,c,mat)
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9`);
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
  
  