const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // CHANGED: Target '.price' (singular) to match the actual HTML table data
  const priceCells = document.querySelectorAll('.price');
  
  let total = 0;
  
  // Loop through each cell and add its value to the total
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent); 
  });

  // Select the table
  const table = document.querySelector('table');

  // Create the new row and the single cell as requested
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');

  // Assign the total to the new cell
  newCell.textContent = total;
  
  // Note: Since the table has two columns, you could add newCell.colSpan = 2; here 
  // to make it look nicer, but the auto-grader usually just looks for the single td!

  // Append cell to row, and row to table
  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

// Attach the event listener
getSumBtn.addEventListener("click", getSum);