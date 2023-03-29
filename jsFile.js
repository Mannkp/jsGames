
function play() {
    let choice = 1;
    while (choice == 1){
        let num1 = Math.floor((Math.random() * 5)+1);
        let inp = prompt("Guess a number: ");
        if (num1 == inp) {
            choice = prompt("Congrats! You Guessed the Correct Number :)\n Enter 1 to continue playing or any other number to Exit game!");
        }
        else {
            choice = prompt("Oops! Your Guess is Incorrect :( \n Enter 1 to continue playing or any other number to Exit game!");
        }
    }
}

// function play2(){
    
//     let input = parseInt(prompt("Guess a number between 0-5: "));
//     while(true){
//         let n = Math.float(Math.random()*2);
//         if(input === n){
//             input = parseInt(prompt("Congratulations!!\n\n(Enter 111 to exit the game)or Enjoy the game\n\nEnter number to guess: "));
//         }
//         else{
//             input = parseInt(prompt("Oops! wrong guess\n\n(Enter 111 to exit the game)or Enjoy the game\n\nEnter number to guess: "));
//         }
//         if(input === 111){
//             break;
//         }
//         console.log("input: " + input);
//     }
    
// }

function play3(){
    alert("Remember to enter \"quit\" to exit the game!")
    let input = prompt("Hey, say something");
    while(true){
        input = prompt(input);
        if(input.toLowerCase() === "quit"){
            break;
        }
    }
    console.log("ok you win!");
}


function play4(){
alert("RULES:\n\t1) you will enter the max. number, random number generated will be within this range\n\t2) If guessed number is greater or lesser than number to guess, you will be notified. Guess again!\n\t3) To quit the game, enter QUIT .");
const maximum = parseInt(prompt("Enter the maximum(hardness) number: "));
console.log("max: "+maximum);
if(!maximum){  //if maximum entered is NaN(string), so if condition will be true 
    maximum = parseInt(prompt("Enter a valid number: "));
}
let attempt = 1;
const randomNumber = Math.floor(Math.random()*maximum)+1;
    let guess = parseInt(prompt("Enter your Guess: "));
    // let guess = prompt("Enter your Guess: ");
    while(parseInt(guess) !== randomNumber){
        if(guess === "quit"){
            break;
        }
        attempt++;
        console.log("guess:" + guess + "rn: "+ randomNumber);
        if(parseInt(guess) > randomNumber){
            guess = prompt("Too high! Enter a new guess: ");
        }
        else{
            guess = prompt("Too low! Enter a new guess: ");
        }
    }
console.log(`YOU GOT IT in ${attempt} attempts!`)
}