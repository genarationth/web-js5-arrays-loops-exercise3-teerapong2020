
let Rows = 5;
for (let i = 1; i <= Rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row.trim());
}
