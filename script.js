const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1. Select all elements containing the prices
  const priceCells = document.querySelectorAll('.prices');
  
  let total = 0;
  
  // 2. Loop through each cell, convert the text to a number, and add it to the total
  priceCells.forEach(cell => {
    // parseFloat converts the string text into a number
    total += parseFloat(cell.textContent); 
  });

  // 3. Select the table so we can append a new row to it
  const table = document.querySelector('table');

  // 4. Create the new row and cell elements
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');

  // 5. Assign the calculated total to the new cell
  newCell.textContent = total;

  // 6. Append the cell to the row, and the row to the table
  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

// 7. Attach the click event listener to the button so the function executes
getSumBtn.addEventListener("click", getSum);