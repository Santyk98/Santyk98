

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send(null);

request.onload = function (e) {
    let response = JSON.parse(request.responseText);   

    function br() {
        console.log("---------------------------------------------------------------------------------------------");
        console.log("---------------------------------------------------------------------------------------------");
    }
// Filter Function
    function CheckAsia(country){
        if (country.region==="Asia") {
            return country.name;
        }
    }

    function Checklessthan2Lakh(country){
        if (country.population<200000) {
            return country.name;
        }
    }
    br();
    const Asia = response.filter(CheckAsia);

    console.log(" Countries in ASIA Continent")  ;
    Asia.forEach(e => {
        console.log(e.name.official);
    });
    br();
    const lessthan2lak = response.filter(Checklessthan2Lakh);
    console.log(" Countries Which has Population Less than 2 Lakh people");
    lessthan2lak.forEach(e => {
        console.log(e.name.official);
    });
    br();
    // Reduce Function
    const population =response.reduce((prevVal,currVal) => {
        return prevVal+currVal.population;
    },0);

    console.log("Total Population in the World: ",population);
    br();

    // console.log(response);

   response.forEach(element => {
    console.log(element.currencies.USD)
   });
    const currenobj = response.filter(({ele},index,response) => {
        // return ele.currencies === 'USD'
    });

    // console.log(currenobj);
}

