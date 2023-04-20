    const inputElement = document.querySelector(".inputElement");   
    const btn = document.querySelector(".btn");
    const activeCases = document.querySelector("#active");
    const newCases = document.querySelector("#new");
    const recoveredCases = document.querySelector("#recovered");
    const totalCases = document.querySelector("#cases");
    const totalDeaths = document.querySelector("#deaths");
    const totalTests = document.querySelector("#tests");

    btn.addEventListener("click", ()=>{
        const country = inputElement.value.trim().toLowerCase();
  fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => response.json())
    .then((data) => {
     
      activeCases.textContent = data.active;
      newCases.textContent = data.new;
      recoveredCases.textContent = data.recovered;
      totalCases.textContent = data.cases;
      totalDeaths.textContent = data.deaths;
      totalTests.textContent = data.tests
    })
    .catch((error) => {
      console.error(error);
    });
    });
