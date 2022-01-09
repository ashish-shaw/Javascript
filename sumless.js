function sumless(N,k,arr) {
    var sum = 0;
    for(var i = 0; i<N; i++) {
        
        if(arr[i]<=k) {
            sum = sum + arr[i];
        }
        
    }
    console.log(sum);

}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var [N,k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(N,k);
    // console.log(arr);
    sumless(N,k,arr)
  }
 



  if (process.env.USERNAME === "ashis") {
    runProgram(`4 2
    1 2 3 4`);
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
  
  