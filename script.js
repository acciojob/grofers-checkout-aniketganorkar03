const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
  const priceCells = document.querySelectorAll('.prices');

  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.textContent = "Total: " + total;
  totalCell.setAttribute('colspan', '2');

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
