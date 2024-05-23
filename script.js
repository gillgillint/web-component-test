document.getElementById('add-row-btn').addEventListener('click', function() {
    // Data to be added (you can replace this with dynamic data)
    const newRowData = {
        name: 'John Doe',
        age: 28,
        country: 'USA'
    };

    // Create a new row
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells into the new row
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const countryCell = newRow.insertCell(2);

    // Add data to the cells
    nameCell.textContent = newRowData.name;
    ageCell.textContent = newRowData.age;
    countryCell.textContent = newRowData.country;
});
