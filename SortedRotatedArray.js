function rotatedbinary(n, key, arr) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    if (key == arr[mid]) {
      return mid;
    }
    if (arr[mid] > arr[low]) {
      if (key >= arr[low] && key < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (key > arr[mid] && key <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var [n, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  console.log(rotatedbinary(n, key, arr));
}
if (process.env.USERNAME === "ashis") {
  runProgram(`5 1
    3 4 5 1 2`);
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
