// function pattern14(n) {
//     for (let i = 1; i <= n; i++) {
//       let str = "";
//       let k = 1;
//       let breakPoint = i - 1;
//       for (let j = 0; j < n - i; j++) {
//         str = str + "  ";
//       }
//       for (let j = 0; j < i; j++) {
//         if (j <= breakPoint) k = k+(i-j-1);
//         else k = k-i;
//         str = str + k.toString() + "   ";
        
//       }
//       for (let j = 0; j < n - i; j++) {
//         str = str + "  ";
//       }
//       console.log(`${str}\n`);
//     }
// }

// pattern14(8)

function generatePascalsTriangle(numRows) {
    let triangle = [];

    for (let row = 0; row < numRows; row++) {
        let currentRow = [];
        
        // Each row starts and ends with 1
        currentRow[0] = currentRow[row] = 1;

        // Calculate the interior values of the row (if any)
        for (let col = 1; col < row; col++) {
            currentRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }

        // Push the current row to the triangle
        triangle.push(currentRow);
    }

    return triangle;
}

// Example usage:
const numRows = 8;
const pascal = generatePascalsTriangle(numRows);
console.log(pascal);