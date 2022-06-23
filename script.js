let myName = "Obumneme Okoye";
let myHeight = 200;
let nameOfMyCountry = "Nigeria";
let myDetails = `
          <div>My name is ${myName}.</div>
          <div> My current height is ${myHeight}cm.</div>
          <div>I am from ${nameOfMyCountry}.</div>
    `;

document.getElementById("display").innerHTML = myDetails;