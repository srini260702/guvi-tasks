





Restcountries & Weather using fetch API


<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Rest countries</title>
    <style>
        .card{
            background : linear-gradient(to right,#DBC9A2,#475856);
            width: 370px;
            margin: 10px;
            
        }
        .container-fluid{
            padding-left: 55px;
            background-color: #475856;
        }
        .btn{
            margin-top: 30px;
            margin-left: 25%;
        }
    </style>
  </head>
  <body>
    <div class="container-fluid">
        <div class="row" id="countriesContainer">

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>

    <script>
        async function getCountries() {
            let response = await fetch('https://restcountries.com/v3.1/all');
            let countries = await response.json();
            return countries;
        }
        

        async function displayCountryCards(){
            let countries = await getCountries();
            let countriesContainer = document.getElementById('countriesContainer');


            countries.forEach(country => {

                console.log('country =' + country.name.common);
                console.log('lat =' + country.latlng[0]);
                console.log('lon=' + country.latlng[1]);

                let card = document.createElement('div');
                card.classList.add('card','col-lg-4','col-sm-12');

                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                let cardTitle = document.createElement('h6');
                cardTitle.classList.add('card-title','text-center','card-header','mt-2','bg-dark','text-white');
                cardTitle.innerText = country.name.common;

                let flagImage = document.createElement('img');
                flagImage.classList.add('card-img-top');
                flagImage.src = country.flags.svg;

                let cardText = document.createElement('h6');
                cardText.classList.add('card-text','text-center','text-light','mt-4');
                cardText.innerText = `Capital : ${country.capital};`
                
                let cardText1 = document.createElement('h6');
                cardText1.classList.add('card-text','text-center','text-light');
                cardText1.innerText = `Region : ${country.region}`;

                let cardText2 = document.createElement('h6');
                cardText2.classList.add('card-text','text-center','text-light');
                cardText2.innerText = `Country Code : ${country.cca3}`;

                let btn = document.createElement('div');
                btn.classList.add('btn','btn-primary');
                let lat = country.latlng[0];
                let lon = country.latlng[1];
                btn.href = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c0b504f9db117f1eeca99cb74756b55a`;
                btn.innerText = ('check for weather');
                


                card.appendChild(cardTitle);
                cardBody.appendChild(flagImage);
                card.appendChild(cardBody);
                countriesContainer.appendChild(card);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardText1);
                cardBody.appendChild(cardText2);
                cardBody.appendChild(btn);

                
            });
        }

        displayCountryCards();
    </script>
  </body>
</html>