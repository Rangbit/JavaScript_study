console.log("hello js");

const password = prompt("please enter a new password")

if(password.length >= 6) {
    if(password.indexOf(' ')===-1){
        console.log("good");
    }else {
        console.log("cannot be space");
    }
} else {
    console.log("password too short. must be 6+ char");
}

const day = 20;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saterday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("non?");
        break;
}