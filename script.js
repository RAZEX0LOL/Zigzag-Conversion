function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = new Array(Math.min(numRows, s.length)).fill("");
    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        curRow += goingDown ? 1 : -1;
    }

    return rows.join("");
}

let s1 = "PAYPALISHIRING";
let numRows1 = 3;
console.log(convert(s1, numRows1));
