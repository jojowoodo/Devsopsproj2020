//Här finns all vår JavaScript kod.. 



function displayS3Content(){
  var el_down = document.getElementById("GFG_DOWN"); 
  let url = `https://a2y5u6gdaf.execute-api.eu-central-1.amazonaws.com/getS3/static`;

  fetch(url)
  .then(response => response.json())

  .then(data => el_down.innerHTML =  JSON.stringify(data, undefined, 4));
    
}
/*
//en liten testfunktion
function testFunction(){
  document.getElementById('testBox').innerHTML += "\nVad fint väder";

  .then(data => el_down.innerHTML = JSON.stringify(data, undefined, 4));



}

*/