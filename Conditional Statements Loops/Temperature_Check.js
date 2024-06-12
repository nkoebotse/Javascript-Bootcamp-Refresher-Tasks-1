// If-else statements
let temperature = 21;  

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Switch statement
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
        break;
}
