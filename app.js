//CHAPTER 1

//Task1. Write a script to greet your website visitor using JS alert box.
alert("Hello! Welcome to our store");
//Task2. Write a script to display following message on your web page: 
alert("Error!Please enter a valid password.");
//Task3. Write a script to display following message on your web page: (Hint : Use line break) 
alert("Welcome JS Land ...\nHappy Coding!");
//Task4.  Write a script to display following messages in sequence: 
alert("Welcome to Js Land....");
alert("Happy Coding!");
//Task 5. Generate the following message through browser’s developer console: 
alert("Hello! I can run alert through web browser's console.");
//Task 6. Make use of alerts in your new/existing HTML & CSS project. 
alert("Heyaa!");


//CHAPTER 2

//Task1. Declare a variable called username. 
var username;
//Task2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName="Syeda Ayman Maqsood";
//Task3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” 
//to variable message c) Display the message in alert box.
var message;
message="Hello World"
alert(message);
//Task4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var a=prompt("Enter your name","Name");
var b=prompt("Enter your age","");
var c=prompt("Enter your course","");
alert(a);
alert(b);
alert(c);
//Task5. Write a script to display the following alert using one JS variable:
var totalNumberofRows = 5;
    var output = '';
    for (var i = 5; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
 //TASK6.Declare a variable called email and assign to it a string that represents your Email
 // Address(e.g. example@example.com). 
 //Show the blow mentioned message in an alert box.(Hint: use string concatenation)    
  var email="syedaayman8@gmail.com"
  alert("My email address is "+email);

  //TASK7.Declare a variable called book & give it the value “A smarter way to learn 
  //JavaScript”. Display the following message in an alert box: 
  var book="A smarter way to learn JavaScript";
  alert(book);
  //TASK8. Write a script to display this in browser through JS 
  document.write("Yah! I can write HTML content through JavaScript");
//TASK9. Store following string in a variable and show in alert and 
//browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
var arr="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(arr);
alert(arr);

//CHAPTER 6

//TASK1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age=21;
alert("Im "+age+" years old.");
//TASK2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
 

//TASK3. Declare a variable called birthYear & assign to it your birth year. 
//Show the following message in your browser: 
var birthYear=1998;
document.write("My birth year is "+birthYear);
document.write("Data type of my declared variable is "+typeof birthYear)
//TASK4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in 
//variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. 
//how many products a visitor wants to order Show the following message in your browser: 
//“John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
var q=prompt("Your name: ","");
var w=prompt("Product Title: ","");
var e=prompt("Quantity: ","");
document.write(q+ " ordered " + e+w +" on XYZ Clothing store");

