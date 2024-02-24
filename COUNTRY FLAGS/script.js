// creating an XML HTTP Request object
const req = new XMLHttpRequest();
// what should i do and From where i have to connect
req.open("GET", "https://restcountries.com/v3.1/all");
req.send(); // sending a request to the server
// what to do when the request is completed successfully
req.onload = function () {
  const obj = JSON.parse(this.response);
  for (let ind = 0; ind < obj.length; ind++) {
    console.log(obj[ind].flags);
  }
};
