function nameFunction(){
    var yourName = document.getElementById("myName").value;
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.nationalize.io?name="+yourName, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
        var getCountry = JSON.parse(result);
        console.log(getCountry);
        var displayCountry = 
        "Name: " +
        getCountry.name +
        "<br>" +
        "Country: " +
        getCountry.country[0,0].country_id +
        "<br>" +
        "Probability: " +
        Math.round(getCountry.country[0,1].probability * 10)/10
        document.getElementById("displayCountry").innerHTML = displayCountry;
    })
    .catch(error => console.log('error', error));
}