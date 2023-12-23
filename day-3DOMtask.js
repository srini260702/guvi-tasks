


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

