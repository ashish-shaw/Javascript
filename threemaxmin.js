function threemaxmin(N, arr) {
    var obj = {}

    for (var i = 0; i < N; i++) {
        var num = arr[i]
        if (obj[num] === undefined) {
            obj[num] = 1
        } else {
            obj[num] = obj[num] + 1
        }
    } //console.log(obj)

    var new_arr = [];
    for (keys in obj) {
        new_arr.push(keys)
    }
    console.log(new_arr);

    function sortNumber(a, b) {
        return a - b;
    }

    new_arr.sort(sortNumber);
    var out = "";
    if (new_arr.length > 3) {
        for (var i = 0; i < 3; i++) {
            out += new_arr[i] + " ";
        } console.log(out)
        var out1 = "";
        for (var i = new_arr.length - 3; i < new_arr.length; i++) {
            out1 += new_arr[i] + " "
        } console.log(out1)
    } else {
        console.log("Not Possible")
        console.log("Not Possible")
    }
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    threemaxmin(N, arr)

}
if (process.env.USERNAME === "ashis") {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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

