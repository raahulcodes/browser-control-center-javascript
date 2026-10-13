// -->DOM Integration

// selecting the main heading and inspect it
let main_heading = document.querySelector("#main-heading");
console.dir(main_heading);

// selecting the browser info paragraph
let browser_info = document.querySelector(".browser-info");

// selecting all three cards
let info_cards = document.querySelectorAll(".info-card");

// selecting the first card
let info_card_one = document.querySelector(".info-card");

// selecting all elements with matching class
let matching_class = document.querySelectorAll(".info-card");
console.log(matching_class);

// checking what happens when there is no matching element
let nul = document.querySelector("li");
console.log(nul);

// -->BOM Integration
let date = new Date();
console.log("Title: " + window.location.pathname + " URL: " + window.location.href);
console.log("Inner Width: " + window.innerWidth + "px. Inner Height: " + window.innerHeight + "px");
console.log("Screen Available Width: " + window.screen.availWidth + "px. Screen Available Height: " + window.screen.availHeight + "px");
console.log("Browser Language: " + window.navigator.language + " Online Status: " + window.navigator.onLine? "Online":"Offline");
console.log("Current Date: " + date.toDateString() + ". Current Time: " + date.getHours()+ ":" + date.getMinutes());

let visit_Url = confirm("You want to visit a new Url");
if(visit_Url)
{
    window.open("https://hubstackrealm.com");
}
else
{
    console.log("Glad you are happy to stay.");
}