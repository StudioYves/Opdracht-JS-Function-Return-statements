//PART 1:CHECKING IF A NUMBER IS BIG

const numberSize = function(number){
    if(number > 100) {
        return true;
    } 
    else {
        return false;
    }
};

//Wat is het resultaat bij 102?
const result1 = numberSize(102);
console.log(result1);

//Wat is het resultaat bij 99?
const result2 = numberSize(99);
console.log(result2);

//Wat is het resultaat bij 34?
const result3 = numberSize(34);
console.log(result3);

//Wat is het resultaat bij 100?
const result4 = numberSize(100);
console.log(result4);

//Answer: The function numberSize produces something!
//---------------------


//PART 2: BOUNCER AT A CLUB

const response = function(maxAmount, currentAmount, age) {
    if(currentAmount < maxAmount && age > 18) {
        return "Come in!"
    }
   else if(age < 18){
        return "This is a club for adults."
   }
   else {
        return "It's too busy now, come back later!"
   }
};

//Oud genoeg en er nog volop plek
const brendaSays1 = response(250, 190, 25);
console.log(brendaSays1);

//Oud genoeg, maar te druk
const brendaSays2 = response(250, 300, 25);
console.log(brendaSays2);

//Plaats genoeg, maar sowieso te jong!
const brendaSays3 = response(250, 190, 17);
console.log(brendaSays3);


//Club is al vol, maar je komt er sowieso niet in, want te jong!
const brendaSays4 = response(250, 300, 17);
console.log(brendaSays4);

//Answer: The function response does something!
//---------------------


//PART3: CALCULATING THE AVERAGE

const average = function(numb1, numb2, numb3, numb4, numb5){
    const sum = (numb1 + numb2 + numb3 + numb4 + numb5)
    const divide = (sum / 5)
    const rounded = Math.round(divide)
    return rounded
    };

const resultA = average(4, 6, 3, 8, 9);
console.log(resultA);

const resultB = average(33, 41, 28, 55, 7);
console.log(resultB);

const resultC = average(7482, 9375, 1872, 2847, 3986);
console.log(resultC);

//Answer: The function average produces something!
//---------------------













