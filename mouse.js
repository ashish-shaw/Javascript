function mouse(N,str) {
    var count = 0;
    for(var i = 0; i<N; i++) {
        if(str[i]=="m" && str[i]=="o" && str[i]=="u" && str[i]=="s" && str[i]=="e") {
            count++;
        }
    }

    console.log(count);
}





function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var T = +input[0];
    var line = 1;
    for(var i = 0; i<T; i++) {
        var N = +input[line];
        line++;
        var str = input[line].trim().split("");
        line++;
        mouse(N,str)
    }
    
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`2
    7
    mousems
    8
    wimousee`);
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
  
  