function WorldCup(NZS,NZSO,NZF,ES,ESO,EF) {
    if(NZS>ES) {
        console.log("New Zealand");
    }
    else if(ES>NZS) {
        console.log("England");
    }
    else if(NZSO>ESO) {
        console.log("New Zealand");
    }
    else if(ESO>NZSO) {
        console.log("England");
    }
    else if(NZF>EF) {
        console.log("New Zealand");
    }
    else if(EF>NZF) {
        console.log("England");
    }
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var [NZS,NZSO,NZF] = input[0].trim().split(" ").map(Number);
    var [ES,ESO,EF] = input[1].trim().split(" ").map(Number);
    WorldCup(NZS,NZSO,NZF,ES,ESO,EF)
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`241 15 21
    241 15 26`);
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
  
  