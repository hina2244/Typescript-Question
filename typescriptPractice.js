"use strict";
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let firstName:string ="Hira";
//console.log(
//`Hello ${firstName}, would you like to learn some TypeScript today?
//`);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//let firstName:string ="hina zaadi";
//console.log(firstName.toLowerCase());
//console.log(firstName.toUpperCase());
//console.log(firstName.charAt(0).toUpperCase()+firstName .slice(1));
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the 
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//console.log(
// `Adolf Hitler Once Said "If you want to shine like a sun you have to burn like it."`);
// 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person:string ="Adolf Hitler"
// let message:string =
// "If you want to shine like a sun you have to burn like it";
// console.log(`${famous_person} once said, "${message}"`);
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let fname: string = "Saleem\tShah"
// let fname1: string = "Saleem\nShah"
// console.log(fname);
// console.log(fname1);
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let a:number = 10
// let b:number = 5
// console.log(a+b);
// console.log(a-b);
// console.log(a*b)
// console.log(a/b)
// 8.You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
//8
// console.log(6 + 2);
// console.log(15 - 7);
// console.log(4 * 2);
// console.log(16 / 2);
// 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let num:number = 2024
// console.log(`my favorite number is ${num}`);
// 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// addition program
// let a:number = 20;
// let b:number = 30;
// console.log(`${a}+${b}=${a + b}`);
// subtraction program
// .log(`${b}-${a}=${b - a}`);
// 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names:string[] = ["Hina Singh", "Asma Shah", "Sana Khan"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let messege:string = "is the founder of IT MATE PAKISTAN"
// console.log(names[0] +" "+ messege);
// console.log(names[1] +" "+ messege);
// console.log(names[2] +" "+ messege);
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let vehicles:string[] =[
//    "BMW", 
//    "Honda Motorcycle", 
//    "Audi R8", 
//    "Honda City" ,
//    "Honda Civics",
// ];
//vehicles.map((item) => console.log(`I would like to own a ${item}`));
// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestArr: string[] = ["Haniya Singh", "Hina Zaadi", "Sana Malik"];
// guestArr.map((item)=>
//    console.log(`Dear ${item}, You are corodially invited to a dinner`)
// );
// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// console.log(guestArr);
// let canNotAttend: string = "Hina Zaadi"
// console.log (canNotAttend + " " +"can not make it, for dinner");
// let newGuest: string = "Sara khan";
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//guestArr.map((item) =>
//  console.log(`Dear ${item}, You are corodially invited to a dinner`)
// );
// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let guestArr = ["Haniya Singh", "Hina Zaadi", "Sana Malik"];
// let canNotAttend = "Hina Zaadi";
// let newGuest = "Sara khan";
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((item)=>
//  console.log(`Dear ${item}, I found a bigger dinner table.`)
// );
// let guestBegin = "Riyaa";
// guestArr.unshift(guestBegin);
// console.log(guestArr);
// let middleGuest = "Crime Master GOGO";
// let middleIndex = guestArr.length / 2;
// guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);
// guestArr.push("khushi");
// console.log(guestArr);
// guestArr.map((item) =>
// console.log(`Dear ${item}, You are corodially invited to a dinner`)
// );
// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// console.log("I can invite only two people to dinner");
// while(guestArr.length >2){
//   let RemoveGuest = guestArr.pop()
//   console.log(`Dear ${RemoveGuest}, you are not invited to the dinners`)
// }
// guestArr.map((item)=>
//    console.log(`Dear ${item}, you are still invited to the dinner`)
// );
// guestArr.pop();
// guestArr.pop();
// console.log(guestArr);
// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let countryArr = [
//  "China",
//  "Bangladesh",
// "Pakistan",
//  "America",
// "India", 
// "Zimbabwe",
// ];
// console.log(countryArr);
// console.log(countryArr.sort());
// console.log(countryArr);
// console.log(countryArr.reverse());
// console.log(countryArr);
// let sorteArray = [
//     "china",
//    "Bangladash",
//    "Pakistan",
//    "Americe",
//   "India",
//   "Zimbabwe",
// ];
// sorteArray.sort();
// console.log(sorteArray);
// sorteArray.reverse();
// console.log(sorteArray);
// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// console.log(guestArr.length + " " +"peoples" + " " + "are invited dinner");
// 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let progLanguages:string[] = ["HTML", :"CSS","JavaScript/TypeScript", "php"];
// progLanguages.map((item) => console.log(item));
// 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let person = { name: "Hina Singh", fName: "Haniya Singh", age: 23 };
// console.log(person);
// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// const programingLanguages: string[] = ["Html", "Css","Python", "javascript", "typescript"];
// console.log(programingLanguages[6]);
// console.log(programingLanguages[3]);
