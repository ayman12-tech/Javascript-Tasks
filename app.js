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