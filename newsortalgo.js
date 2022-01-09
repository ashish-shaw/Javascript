function NewSortAlgo(N, k, arr) {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N - i - 1; j++) {
      if (arr[j] % k > arr[j + 1] % k) {
        var a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
      }
    }
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [N, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  //console.log(N, k, arr);
  NewSortAlgo(N, k, arr);
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5 6
    12 18 17 65 46`);
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
