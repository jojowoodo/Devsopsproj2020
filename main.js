//Här finns all vår JavaScript kod.. 



function displayS3Content(){

  let url = `https://a2y5u6gdaf.execute-api.eu-central-1.amazonaws.com/getS3/static`;
  fetch(url)
  .then(response => response.json())
  .then(data => document.getElementById("s3content").innerHTML =  JSON.stringify(data));
    
}

//en liten testfunktion
function testFunction(){
  document.getElementById('testBox').innerHTML += "\nVad fint väder";
}