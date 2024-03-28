


Javascript Array Task :



// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Filter countries with population less than 200000 (2 lakhs)
    const lowPopulationCountries = data.filter(country => country.population < 200000);

    // Print name, capital, and flag using forEach function
    console.log("Countries in Asia:");
    asiaCountries.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    console.log("\nCountries with population less than 2 lakhs:");
    lowPopulationCountries.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    // Calculate total population using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("\nTotal population of countries:", totalPopulation);

    // Find the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD !== undefined);
    console.log("\nCountry that uses US dollars as currency:", countryWithUSD.name.common);
  })
  .catch(error => console.log('Error fetching data:', error));