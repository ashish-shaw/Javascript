function sumofdigits(n,arr) {
    for(var i = 0; i<n; i++) {
    var sum = 0
     while(arr[i] > 0){
            sum += (arr[i] % 10);
            arr[i] = Math.floor(arr[i]/10);
}
    }
    
    console.log(sum);
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(var i = 0; i<test; i++) {
        var n = +input[line];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        sumofdigits(n,arr)
    }

    
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
  