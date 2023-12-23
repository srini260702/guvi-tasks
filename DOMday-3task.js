



2) form creation :

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form A</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    form {
      max-width: 600px;
      margin: 20px auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    table, th, td {
      border: 1px solid #ddd;
      text-align: left;
    }
    th, td {
      padding: 10px;
    }
  </style>
</head>
<body>

  <form id="dataForm">
    <div class="row">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" required>
    </div>
    <br>
    <div class="row">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" required>
    </div>
    <br>
    <div class="row">
        <label for="address">Address:</label>
        <input type="text" id="address" required>
    </div>
    <br>
    <div class="row">
        <label for="pincode">Pincode:</label>
        <input type="text" id="pincode" required pattern="\d{6}">
    </div>
    <br>
    <div class="row">
        <label for="gender">Gender:</label>
        <select id="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
    <br>
    <div class="row">
        <label for="food">Choice of Food (Select at least 2):</label>
    </div>
    <br>
    <div class="row">
        <input type="checkbox" name="food" value="burger"> Burger
        <input type="checkbox" name="food" value="pizza"> Pizza
        <input type="checkbox" name="food" value="pasta"> Pasta
        <input type="checkbox" name="food" value="sushi"> Sushi
        <input type="checkbox" name="food" value="salad"> Salad
    </div>
    <br>
    <div class="row">
        <label for="state">State:</label>
        <input type="text" id="state" required>
    </div>
    <br>
    <div class="row">
        <label for="country">Country:</label>
        <input type="text" id="country" required>
    </div>
    <br>
    <div class="row">
        <button type="button" onclick="submitForm()">Submit</button>
    </div>
    
  </form>

  <table id="dataTable">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Food</th>
        <th>State</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script>
    function submitForm() {
      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.getElementById('gender').value;

      const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
      const food = Array.from(foodCheckboxes).map(checkbox => checkbox.value).join(', ');

      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;

      // Create a new table row
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;

      // Append the new row to the table body
      document.querySelector('tbody').appendChild(newRow);

      // Clear form fields
      document.getElementById('dataForm').reset();
    }
  </script>

</body>
</html>
