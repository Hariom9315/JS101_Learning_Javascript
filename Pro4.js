/*name="Hariom";
school= "SKV Basai Dara Pur";
Roll ="Roll no.- 25";
subj1="Maths-65";
subj2="Science-55";
subj3="Eng-67";
console.log(name);
console.log(school);
console.log(Roll);
console.log(subj1);
console.log(subj2);
console.log(subj3);*/
let f = "fizz";
let b = "buzz";
for (let num = 1; num <=700 ; num++) {
    if (num% 3 === 0 && num % 5 ===0){
    console.log(num + f + b);
                }
    else if (num % 5 === 0){
    console.log(num+b);
                }
    else if (num % 3 === 0){
    console.log(num+f);
                }
    else {
    console.log(num);
                }
            }