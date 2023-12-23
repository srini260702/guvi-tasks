





1) calculator :

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f8f9fa;
      }
      .calculator {
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div
      class="calculator"
      style="
        border: 1px solid black;
        padding: 8px;
        border-radius: 5px;
        background-color: #dadada;
      "
    >
      <input
        type="text"
        id="display"
        class="form-control mb-3"
        placeholder="0"
        style="padding: 25px;
        margin-top: 20px;
        "
        readonly
      />
      <div class="row">
        <div class="col-3 my-1">
          <button class="btn btn-light btn-block" onclick="clearDisplay()">
            c
          </button>
        </div>
        <div class="col-3 my-1">
          <button class="btn btn-light btn-block" onclick="backspace()">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('.')"
          >
            .
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('*')"
          >
            x
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('7')"
          >
            7
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('8')"
          >
            8
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('9')"
          >
            9
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('/')"
          >
            /
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('4')"
          >
            4
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('5')"
          >
            5
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('6')"
          >
            6
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('-')"
          >
            -
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('1')"
          >
            1
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('2')"
          >
            2
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('3')"
          >
            3
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('+')"
          >
            +
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('0')"
          >
            0
          </button>
        </div>
        <div class="col-3 my-1">
          <button
            class="btn btn-light btn-block"
            onclick="appendToDisplay('00')"
          >
            00
          </button>
        </div>
        <div class="col-6 my-1">
          <button class="btn btn-primary btn-block" onclick="calculate()">
            =
          </button>
        </div>
      </div>
    </div>

    <script>
      const display = document.getElementById("display");

      function backspace() {
        let currentValue = display.value;
        display.value = currentValue.substring(0, currentValue.length - 1);
      }

      function appendToDisplay(value) {
        display.value += value;
      }

      function calculate() {
        try {
          display.value = eval(display.value);
        } catch (error) {
          alert("Invalid expression");
          clearDisplay();
        }
      }

      function clearDisplay() {
        display.value = "";
      }

      document.addEventListener("keydown", function (event) {
        const key = event.key;

        if (
          !isNaN(key) ||
          key === "." ||
          key === "+" ||
          key === "-" ||
          key === "*" ||
          key === "/"
        ) {
          appendToDisplay(key);
        } else {
          alert("Only numbers are allowed");
        }
      });
    </script>
  </body>
</html>






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
