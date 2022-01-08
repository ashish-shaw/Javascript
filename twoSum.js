function TwoSum(N,B,arr) {
    var left = 0;
    var right = arr.length-1;
    var sum = 0;
    while(left<right) {
        sum = arr[left] + arr[right];
        if(sum==B) {
            console.log(left,right);
        }
        else if(sum>B) {
            right--;
        }
        else {
            left++;
        }
    }
      //  console.log("-1","-1");
}



function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = +input[0];
    var line = 1;
    for(var i = 0; i<testcases; i++) {
        var [N,B] = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split("\n").map(Number);
        line++;
        TwoSum(N,B,arr)
    }
   
  }
  if (process.env.USERNAME === "ashis") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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
  
  