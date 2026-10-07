
// browser information
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.search);
console.log(window.location.hash);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.screen.availHeight);
console.log(window.screen.availWidth);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.onLine?"Browser Online!":"Browser Offline!");
console.log(navigator.cookieEnabled?"Cookie Enabled!":"Cookie Not Enabled!");

// navigator controller
/*
console.log(window.location.href="https://www.google.com");
console.log(window.location.reload());
console.log(window.location.replace("https://jiohotstar.com");

*/

// new window controller
let myWindow = window.open("https://hubstackrealm.com", "hubstackrealm");
myWindow.close();

// countdown timer
let i =5;
let timer = window.setInterval(function()
{
    console.log(i);
    if(i==1)
    {
        window.clearInterval(timer);
        console.log("Time's Up!");
    }
    else 
        {    
    i--;}
}, 1000)

// timer cancellation
console.log("Action Scheduled!")
let timer_new = window.setTimeout(function()
{
    console.log("Action Scheduled!!");
}, 5000);
window.setTimeout(function(){
    window.clearTimeout(timer_new);
    console.log("Action Cancelled!");
},2000)

// browser dialogs
let user_response = confirm("You want to continue?");
if(user_response)
{
    let username = prompt("Enter your Name!");
    console.log("Welcome " + username);
}
else 
{
    console.log("Thanks for cancelling!");
}

// browser history
history.back();
history.forward();
history.go(2);
