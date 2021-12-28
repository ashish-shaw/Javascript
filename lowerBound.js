function lowerBound(n, key, arr, low, high) {
  var ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == key) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [n, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var low = 0;
  var high = n;

  console.log(lowerBound(n, key, arr, low, high));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5 0
         2 -2 0 3 4`);
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
