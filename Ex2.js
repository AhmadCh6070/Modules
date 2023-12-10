//Task#1
 const List = [];
 for(let i = 0;i<5;i++){
     let x = parseInt(prompt("Enter Number"))
     List.push(x);
 }
 console.log(List)

 //Task#2

 const Task02 = document.getElementById("Task02")
 const Participants = []
 var number = parseInt(prompt("Enter Number of Participants"))
 for (let i = 1;i<=number;i++){
     let Name = (prompt(`Enter Player ${i}'s Name`))
     Participants.push(Name)

 }
 Participants.sort()
 const ol2 = document.createElement("ol")
 for(const i of Participants){
     ol2.innerHTML += `<li>${i}</li>`
 }

 Task02.appendChild(ol2)


 //Task#3

 const Task03 = document.getElementById("Task03")

 let Dogs = []
 for (let i = 1;i<=6;i++){
     let Name = prompt(`Enter Dog ${i}'s Name`)
     Dogs.push(Name)

 }
 Dogs.sort()
 Dogs.reverse()
 console.log(Dogs)
 const ol3 = document.createElement("ul")
 for(const i of Dogs){
     ol3.innerHTML += `<li>${i}</li>`
 }

 Task03.appendChild(ol3)

 //Task#4

 const Task04 = document.getElementById("Task04")

 const numList =[]
 while (true) {
     let num = parseInt(prompt("Enter a number (enter 0 to stop):"));
     if (num === 0) {
       break;
     }
     numList.push(num);
 }

 numList.sort((a,b) => b-a)
 console.log(numList)

Task#5
 const uList = []
 while (true) {
     let num = parseInt(prompt("Enter a number(must be unique):"));
     if (uList.includes(num)) {
       break;
     }
     uList.push(num);

 }
 uList.sort((a,b) => a-b)
 console.log(uList)

 //Task#6

 const Task06 = document.getElementById("Task06");
 const rolls =[];
 (function(){
     while (true) {
         let num = Math.floor((Math.random()*6)+1)
         if (num === 6) {
             rolls.push(num);
             break;
     }
         rolls.push(num);
     }
 })()
 const ol6 = document.createElement("ul")
 for(const i of rolls){
     ol6.innerHTML += `<li>${i}</li>`
 }

 Task06.appendChild(ol6)


 //Task#7

 const Task07 = document.getElementById("Task07");
 const uRolls =[];
 let Sides = +prompt("Enter Number of Sies of Dice");
 (function(){
     while (true) {
         let num = Math.floor((Math.random()*Sides)+1);
         if (num === Sides) {
             uRolls.push(num);
             break;
     }
         uRolls.push(num);
     }
 })()
 const ol7 = document.createElement("ul");
 for(const i of uRolls){
     ol7.innerHTML += `<li>${i}</li>`
 }

 Task07.appendChild(ol7);

 //Task#8

 const Task08 = document.getElementById("Task08");
 function concat(data){
     let concatName = ""
     for (const i of data) {
         concatName += i

     }
     return concatName
 }

 fullName = concat(["Ahm","a","d"," ","Chau","dhary"])

 Task08.append(fullName)

//Task#9

const Task09_1 = document.getElementById("Task09_1");
const allNumbers = [1,2,3,4,5,6,7,8,9,10]
Task09_1.append(allNumbers)

const Task09_2 = document.getElementById("Task09_2");
const evenNumbers = allNumbers.filter((allNumbers) => allNumbers%2 === 0)
Task09_2.append(evenNumbers)











