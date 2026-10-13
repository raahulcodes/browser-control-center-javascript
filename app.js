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