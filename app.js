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

//CHAPTER 4
//TASK1. Declare 3 variables in one statement.
var a,b,c;

//TASK2. Declare 5 legal & 5 illegal variable names. 
//legal:
var ayman;
var Ayman;
var ayRiz;
var num1;
var $rizwan;
//illegal:
// var 11;
// var 1num;
// var alert;
// var var;
// var ay.a;

//TASK3. Display this in your browser a)  A heading stating “Rules for naming JS variables” 
//b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//d) Variable names are case _________ e) Variable names should not be JS _________   
document.write("<br><b>Rules for naming JS variables</b>");
document.write("<br>Variable names can only contain ______, ______, ______ and ______.<br> For example $my_1stVariable");
document.write("<br>Variables must begin with a ______, ______ or _____. For example $name, _name or name");
document.write("<br>Variables names are case sensitive.");
document.write("<br> Variable names should not be JS keywords");

//CHAPTER 5
//TASK 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
 var c=+prompt("Enter a no.","");
 var d=+prompt("Enter a no.","");
 var e=(c+d);
 document.write("Sum of "+c+ " and " +d+ " is " +e);
 //TASK 2. Repeat task1 for subtraction, multiplication, division & modulus. 
 var c=+prompt("Enter a no.","");
 var d=+prompt("Enter a no.","");
 var e=(c-d);
 document.write("Sum of "+c+ " and " +d+ " is " +e);

 var c=+prompt("Enter a no.","");
 var d=+prompt("Enter a no.","");
 var e=(c*d);
 document.write("Sum of "+c+ " and " +d+ " is " +e);

 var c=+prompt("Enter a no.","");
 var d=+prompt("Enter a no.","");
 var e=(c%d);
 document.write("Sum of "+c+ " and " +d+ " is " +e);
 

 //TASK 3. Do the following using JS Mathematic Expressions a. Declare a variable. 
 //b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
 //c. Initialize the variable with some number. d. Show the value of variable in your browser like 
 //“Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like 
 //“Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your
  //browser like “Value MATH EXPRESSIONS | JAVASCRIPT after addition is: 13”. 
  //i. Decrement the variable. j. Show the value of variable in your browser like 
  //“Value after decrement is: 12”. k. Show the remainder after dividing the variable’s 
  //value by 3.  l. Output : “The remainder is : 0”. 
 var u=undefined;
 document.write("<br>Value after variable declaration is: " +u);
 u=22;
 document.write("<br>Initial value:"+u);
 ++u;
 document.write("<br>Value after increment is:" +u);
 var f=u+7;
 document.write("<br>Value MATH EXPRESSIONS | JAVASCRIPT after addition is: "+f);
 --f;
 document.write("<br>Value after decrement is: "+f);
 var r=f/3;
document.write("The remainder is ",+r);
//TASK 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket 
//price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
var j=+prompt("<br>Enter the quantity:","");
arra=600*j;
document.write("<br>Total cost to buy"+j+"tickets to a movie is: "+arra);
//TASK 5.Write a script to display multiplication table of any number in your browser. 
for(i=1;i<11;i++)
{   
    document.write("<br>4 x "+ i +"="+4*i);
}
//TASK 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the 
//steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit 
//& output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”. 
var celsius=20;
var ffar=(celsius*9/5)+32;
document.write(celsius+"<br>C is"+ffar);
var ft=96;
var cs=(ft-32)*5/9;
document.write(ft+"<br>F is"+cs);
//TASK 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce 
//website. Store the following in variables a. Price of item 1 b. Price of item 2 
//c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
//Compute the total cost & show the receipt in your browser. 
var item1=20;
var item2=30;
var q1=+prompt("Enter quantity of item1:","");
var q2=+prompt("Enter quantity of item2:","");
var sc=100;
var sum=item1*q1+item2*q2+sc;
document.write("Total cost of your order is "+sum);
//TASK 8. Store total marks & marks obtained by a student in 2 variables. 
//Compute the percentage & show the result in your browser
var total=100;
var secured=90;
var perc=(secured/total)*100;
document.write("<br>Percentage: "+perc) ;
//TASK 10. Write a program to initialize a variable with some number and do arithmetic in 
//following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all 
//calculations in a single expression 
var num=5;
var ss=((num+5)*10)/2;
//TASK 11. The Age Calculator: Forgot how old someone is? Calculate it! 
//a. Store the current year in a variable. b. Store their birth year in a variable. 
//c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”. 
var birthYear = 1984;
var futureYear  = 2012;
var age  = futureYear - birthYear;
document.write("You will be either " + age + " or " + (age - 1));
//TASK 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
//b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
//(Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, 
//and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var radius=3;
var c= 2*3.142*radius;
document.write("<br><br>The circumference is ",c);
var area=3.14*Math.pow(radius,2);
document.write("<br><br>The area is "+ area);
//TASK 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite 
//snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age 
//into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day
// (as a number). e. Calculate how many would you eat total for the rest of your life. 
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
var snacks="lays";
var c_age=21;
var max_age=90;
var amt=10;
var ripe=(max_age-c_age)*amt;
document.write("<br><br>You will need " +ripe+"lays to last you until the ripe old age of 90");

//CHAPTERS 6-9:
//TASK 1. Write a program to take a number in a variable, do the required arithmetic to 
//display the following result in your browser:  
var ra=10;
document.write("The value of a is "+ra);
++ra;
document.write("The value of ++a is "+ra);
ra++;
document.write("The value of a++ is "+ra);
--ra;
document.write("The value of --a is "+ra);
ra--;
document.write("The value of a-- is "+ra);
//TASK 2. What will be the output in variables a, b & result after execution of the following script: 
//var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: 
//--a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 
var a=2;
var b=1;
var result=--a - --b + ++b + b--;
var result1=--a; --a - --b;
var result2=--a - --b + ++b;
var result3=--a - --b + ++b + b--;
document.write(result);
document.write(result1);
document.write(result2);
document.write(result3);
//TASK 3. Write a program that takes input a name from user & greet the user. 
var ariz=prompt("Enter your name");
alert("Welcome: "+ariz);
//TASK 5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
//If user does not enter a new number, multiplication table of 5 should be displayed by default. 
var noo=+prompt("Enter a no. for table","");
if (noo==null)
{
    for(i=1;i<11;i++)
{   
    document.write("<br>5 x "+ i +"="+5*i);
}
}
else{
    for(i=1;i<11;i++)
{   
    document.write("<br>"+noo+" x "+ i +"="+noo*i);
}
}
//TASK 6. Take a) Take three subjects name from user and store them in 3 different variables. 
//b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks 
//for first subject from user and stored it in different variable.  
//d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table
var sub1=propmt("Enter the sub name","");
var sub2=propmt("Enter the sub name","");
var sub3=propmt("Enter the sub name","");
var tt=100;
var ob1=+prompt("Enter the marks you obtained in sub1","");
var ob2=+prompt("Enter the marks you obtained in sub2","");
var ob3=+prompt("Enter the marks you obtained in sub3","");
document.write("Subject Total Marks Ob Percentage");
document.write(sub1,tt ,ob1,(ob1/tt)*100);

//CHAPTER 9-11
//TASK1. Write a program to take “city” name as input from user. If user enters “Karachi”, 
//welcome the user like this: “Welcome to city of lights”
var city=prompt("Enter the city name");
if(city=="Karachi")
{
    document.write("Welcome to the city of lights");
}
//TASK 2. Write a program to take “gender” as input from user. If the user is male, 
//give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
var gender=prompt("Enter your gender","");
if(gender==male){
    document.write("Good Morning Sir!")
}
else{
    document.write("Good Morning Ma’am");
}
//TASK3. Write a program to take input color of road traffic signal from the 
//user & show the message according to this table: 
var signal=prompt("Enter color");
if(signal=="red")
{
    document.write("Must stop");
} 
else if(signal==yellow)
{
    document.write("Ready to move");
}
else{
    document.write("Move now");
}

//TASK 4. Write a program to take input remaining fuel in car (in litres) from user. If the current 
//fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 
var fuel=+prompt("Remaining fuel:","");
if(fuel<0.25)
{
    document.write("Please fill the fuel");
}
//TASK 5.Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
//b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
//c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } 
//if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } 
//if(c === 14){ alert("condition 4 is true"); } 
 
//d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; 
//if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
//e. if (true){ alert("True"); } if (false){ alert("False"); } 
//f. if("car" < "cat"){ alert("car is smaller than cat"); }

//TASK 6 Write a program to take input the marks obtained in three subjects & total marks. 
//Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
//Show the total marks, marks obtained, percentage, grade & remarks like: 
 var marks=+prompt("Enter your marks","");
 var tm=300;
var sc=(marks/tm)*100;
if(sc<=100 && sc>=80)
{
    document.write("A+");
} 
else if(sc<=79 && sc>=70){
    document.write("A");
}
else
{
    document.writeO("fail");
}
