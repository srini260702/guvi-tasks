


index.html file :

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Countdown Example</title>
</head>
<body>
  <script src="./callback.js"></script>
</body>
</html>

callback.js file :

function countdown(start, callback) {
    setTimeout(function () {
      if (start > 0) {
        console.log(start);
        countdown(start - 1, callback);
      } else {
        callback();
      }
    }, 1000);
  }
  
  countdown(10, function () {
    console.log("Happy Independence Day");
  });