
let number = document.getElementById("number");
let counter = 0; /**cause we'll start counting from zero */

setInterval(() => {
    if(counter== 65){ /**the purpose of this if statement is to make the the increment stop at 65 else, it'll just keep incrementing infinitely*/
        clearInterval();
    } else{
        counter += 1; /**this will be incrementiing by 1 the value of counter */
        number.innerHTML = counter + "%" /**this will print the number plus the percent symbol on the webpage */
    }
 
}, 30 /**this is the timing interval which will the incrementing increment by 0.03 second i.e 30 miliseconds */);



let number2 = document.getElementById("number2");
let counter2 = 0; /**cause we'll start counting from zero */

setInterval(() => {
    if(counter2== 78){ /**the purpose of this if statement is to make the the increment stop at 65 else, it'll just keep incrementing infinitely*/
        clearInterval();
    } else{
        counter2 += 1; /**this will be incrementiing by 1 the value of counter */
        number2.innerHTML = counter2 + "%" /**this will print the number plus the percent symbol on the webpage */
    }
 
}, 28 /**this is the timing interval which will the incrementing increment by 0.03 second i.e 25 miliseconds */);



let number3 = document.getElementById("number3");
let counter3 = 0; /**cause we'll start counting from zero */

setInterval(() => {
    if(counter3== 30){ /**the purpose of this if statement is to make the the increment stop at 65 else, it'll just keep incrementing infinitely*/
        clearInterval();
    } else{
        counter3 += 1; /**this will be incrementiing by 1 the value of counter */
        number3.innerHTML = counter3 + "%" /**this will print the number plus the percent symbol on the webpage */
    }
 
}, 15 /**this is the timing interval which will the incrementing increment by 0.03 second i.e 25 miliseconds */);