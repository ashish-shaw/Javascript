function spiral(n, m, mat) {
    var r = 0;
    var c = 0;
    var lr = n - 1;
    var lc = m - 1;
    var o = [];
    while (r <= lr && c <= lc) {
        for (var i = lr; i >= r; i--) {
            o.push(mat[i][c])
        }
        c++;
        for (var j = c; j <= lc; j++) {
            o.push(mat[r][j]);
        }
        r++;
        if (c <= lc) {
            for (var k = r; k <= lr; k++) {
                o.push(mat[k][lc]);
            }
            lc--;
        }
        if(r<=lr) {
            for(var l = lc; l>=c; l--) {
                o.push(mat[lr][l]);
            }
            lr--;
        }
    }
    console.log(o.join(" "));
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var t = +input[0];
    var line = 1;
    for (var i = 0; i < t; i++) {
        var [n, m] = input[line].trim().split(" ").map(Number);
        line++;
        var mat = [];
        for (var j = 0; j < n; j++) {
            mat.push(input[line].trim().split(" ").map(Number))
            line++;
        }
        spiral(n, m, mat)
    }

}
if (process.env.USERNAME === "ashis") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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

