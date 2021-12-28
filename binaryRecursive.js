function binaryRecursive(n, key, arr, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (key == arr[mid]) {
    return 1;
  }
  if (key > arr[mid]) {
    return binaryRecursive(n, key, arr, mid + 1, high);
  }
  if (key < arr[mid]) {
    return binaryRecursive(n, key, arr, low, mid - 1);
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [n, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  var low = arr[0];
  var high = arr.length - 1;
  console.log(binaryRecursive(n, key, arr, low, high));
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
