//Chap 21 - 25 Question # 1     
// var firstname = prompt("Please Enter Your First Name");
// var lastname = prompt("Please Enter Your Last Name");
// var merge = (firstname + lastname);
//  var upper = merge.toUpperCase();
// alert(" Welcome To Our Page Sir" + " " +   upper)




//Chap 21 - 25 Question # 2   
// var arr = ["samsung","nokia","htc","infinix"]
// var favphone = prompt("Please Enter Your Favourite Mobile Name");
// var length = arr.length;
// for( i = 0; i <= length; i++ )
// {
// if (arr[i] === favphone)

// document.write("My favourite Pho





//Chap 21 - 25 Question # 3   
// var text = 'pakistani'
// var index = text.indexOf('n')
// document.write (" index of n in pakistani is " + " " + index);





//Chap 21 - 25 Question # 4  
//  var text = 'Hello World';
//  var index = text.lastIndexOf('l')
//  document.write (" last  index in Hello  World is " + " " + index);






//Chap 21 - 25 Question # 5   
// var str = "pakistan";
// var res = str.charAt(3);
// alert(res);

// var str1 =  prompt(Enter  First Name");
// var str2 = prompt("Enter Last Name");
// var res = str1.concat(str2);
// alert(res);

// End Of Chap 21 - 25


// Start of Chap 26-30


//Chap 26 - 30 Question # 1 
// var num = +prompt("Enter any positive Number");
// document.write("Number : " +num);
// document.write("<br> Round Off : " +Math.round(num));
// document.write("<br> Floor Value : " +Math.floor(num));
// document.write("<br> Ceil Value : " +Math.ceil(num));




//Chap 26 - 30 Question # 2
// var num = +prompt("Enter any negative Number");
// document.write("Number : " +num);
// document.write("<br> Round Off : " +Math.round(num));
// document.write("<br> Floor Value : " +Math.floor(num));
// document.write("<br> Ceil Value : " +Math.ceil(num));




//Chap 26 - 30 Question # 3 
// var num = +prompt("Enter any Number to get Absolute Value");
// document.write("Absolute Value of "+num+" is "+Math.abs(num));





//Chap 26 - 30 Question # 4 
// var dice =Math.ceil(Math.random()*6);
// document.write("Random Dice Value : "+dice)






//Chap 26 - 30 Question # 5
// var coin =Math.ceil(Math.random()*2);
// if(coin == 1){
// document.write("Random Coin Value : 2 <br> Heads ")
// }
// else{
//     document.write("Random Coin Value : 1 <br> Tails ")
//     }





//Chap 26 - 30 Question # 6
// var num =Math.ceil(Math.random()*100);
// document.write("Random Number Between 1 and 100 : "+num )





//Chap 26 - 30 Question # 7
// var weight = +prompt("Enter your weight in Kilograms")
// document.write("The weight of User is : "+weight+" Kilograms")






//Chap 26 - 30 Question # 8
// var secretNumber =Math.ceil(Math.random()*10);
// var inputNumber =+prompt("Enter a Number Between 1 to 10");
// if (secretNumber == inputNumber){
// document.write("Congratulations ! The Number is matched " )
// }
// else {
//     document.write("Try Again !")
//     }


// End Of Chap 26 - 30




// Start Of Chap 31 - 34




//Chap 31 - 34 Question # 1
// var date = new Date();
// document.write(date);




//Chap 31 - 34 Question # 2
//   var array = ["jan","feb","march","april","may","june","july","aug","sept","oct"]
//  var date = new Date();
//  var month = date.getMonth();
//  var newmonth = array[month];
//  alert(newmonth);
 




//Chap 31 - 34 Question # 3
//  var date = new Date();
// var b = date.toString();
// var c = b.slice(0,3);
// document.write("todaty is" + " " + c )





//Chap 31 - 34 Question # 4
//   var date = new Date();
//  var b = date.toString();
//  var c = b.slice(0,3);
// if (c === "sun"){
//     document.write("its fun day")
// }else if (c === "sat") {
//     document.write("its fun day")
// }else{
//     document.write("not funday")
// }





//Chap 31 - 34 Question # 5
//   var date = new Date();
//   var b =date.toString();
//   var c = b.slice(8,11);
  
//   if(c <= 15)
//   {
//       alert("First fifteen days of the month")
//   }
// else{
//     alert("last fifteen days of the month")
// }




 
//Chap 31 - 34 Question # 6
// var ali = new Date()
// var dob = new Date("jan 1, 1970")
// var dobmili = dob.getTime()
// var dobmin = dob.getUTCMinutes()
// alert(dobmili);
// document.write("current date" + ali + "<br>")
// document.write( "miliseconds from  jan 1 1970" + dobmili + "<br>" )
// document.write("minutes from jan 1 1970" + dobmin + "<br>")





//Chap 31 - 34 Question # 7
// var array = ["jan","feb","march","april","may","june","july","aug","sept","oct","nov","Dec"]
// var date1 = new Date ( "dec 31, 2020" );
// var date = date1.getDate();
// var year = date1.getFullYear();
// var month = date1.getMonth();
// var d = array[month];
// document.write( date + " " + year + " " + d  )





//Chap 31 - 34 Question # 8
//  var dob = new Date(" june 15, 2020")
//  var dobmili = dob.getTime()
//  alert(dobmili);
//  var today = new Date();   
//  var todaymili  = today.getTime();
//  var sub = todaymili - dobmili;
//  alert(sub);
//  var days = sub/(1000*60*60*24);
//  var d = Math.floor(days)
//  alert( "Days ramzan passed" + " " + d);






//Chap 31 - 34 Question # 9
//  var dob = new Date(" Dec 5, 2015")  
//  var dobsec = dob.getTime()
//  alert(dobsec);
//  var today = new Date( "jan 1, 2015 ");   
//  var todaysec  = today.getTime();
//  var sub = dobsec - todaysec;
//  alert(sub);
//  var seconds = sub/(1000);
//  document.write("our ref date jan 1 2015  and our current date is jan 5 2015 beteen them seconds passed are"  + " " + seconds);



 
 

//Chap 31 - 34 Question # 10
// var a = prompt("enter your date of for mat is this" + " " +  "  format is   jan 5, 1991")
//  var dob = new Date(a);
//  var dobmili = dob.getTime()
//  var today = new Date();   
//  var todaymili  = today.getTime();
//  var sub = todaymili - dobmili;
//  var year = sub/(1000*60*60*24*12*30);
//  var round = Math.floor(year)
//  alert(   " your age is " + round);





//Chap 31 - 34 Question # 14
// document.write("kelectric bill" +  "<br>"+  "<br>" +  "<br>")
//  var name = "Shayan Ali";
//  var month = "june";
//  var numunit = 1200;
// var charge = 15;
// lps = 200; 
// var net = (charge*numunit);
//  var ga = net+lps; 

//  document.write("Customer Name" + " "  + name +  "<br>")
//  document.write("Month" + " "  + month +  "<br>")
//  document.write("Number of unit " + " "  + numunit +  "<br>")
//  document.write("Charge Per Unit" + " "  + charge  +  "<br>")
//  document.write("New Amount Payable (With in Due date)" + " "  + net +  "<br>")
//  document.write("Gross Amount Payable (after Due date)" + " "  + ga +  "<br>")
//  document.write("late payement surcharge fee" + " "  + lps +  "<br>")


// End of Chap 31-34




// Start of Chap 34-38


//Chap 34 - 38 Question # 1
// function currentDate() {
//  date = new Date();
//  document.write(date);
// }
// currentDate();




//Chap 34 - 38 Question # 2
// function greet() {
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     alert("Welcome "+firstName+" "+lastName);
// }

// greet();






//Chap 34 - 38 Question # 3
// function sum() {
//     var firstNum = +prompt("Enter First Number");
//     var lastNum = +prompt("Enter Last Number");
//     alert("The Sum of "+firstNum+" and "+lastNum+" is "+(firstNum+lastNum));
// }

// sum();






//Chap 34 - 38 Question # 5
// function square() {
//     var num = +prompt("Enter Any Number");
//     alert("The Square of "+num+ " is "+(num*num));
// }
// square();






//Chap 34 - 38 Question # 6
// function factorial() {
//     var num = +prompt("Enter Any Number");
//     var ans = 1;
//     for(;num>=1;num--) {
//         ans = ans*num;
//     }
//     alert("The Factorial of given number is "+ans);
// }
// factorial();



//Chap 34 - 38 Question # 7
// function counting() {
//     var start = +prompt("Enter Starting Number");
//     var end = +prompt("Enter Ending Number");
//     for(;start<=end;start++){
//     document.write(start +"<br>");
// }
// }
// counting();


//Chap 34 - 38 Question # 8
//  var base =prompt("Enter the Value of Base ");
//  var perp =prompt("Enter the Value of Perpendicular ");
// function hypotenuse(m, n) {    
//     function square(num) {         
//        return num * num; 
//     }
//     return Math.sqrt(square(m) + square(n));
// }
// alert("The Value of Hypotenuse is : "+hypotenuse(base,perp));






//Chap 34 - 38 Question # 9
// var area = calcArea(5,4);
// document.write("The area of triangle is : "+area+"cm<sup>2<\sup>");

// function calcArea(w,h){
//     return w*h;
// }





//Chap 34 - 38 Question # 10
// var width=prompt("Enter width of rectangle in cm");
// var height=prompt("Enter height of rectangle in cm");
// var area = calcArea(width,height);
// document.write("The area of triangle is : "+area+"cm<sup>2<\sup>");

// function calcArea(w,h){
//     return w*h;
// }

//Chap 34 - 38 Question # 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// var string = prompt(" Enter any string in lowercase :")
// document.write(uppercase(string));





//Chap 34 - 38 Question # 12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// document.write(longestWord("hello how are you"));





//Chap 34 - 38 Question # 14
// function calcCircumference(rad){
//     return 2*3.142*rad ;
// }
// function calcArea(rad){
//     return 3.142*rad*rad ;
// }

// var radius = prompt("Enter the radius of circle ");
// var circumference = calcCircumference(radius);
// var area = calcArea(radius);
// document.write("The Circumference of circle is : "+circumference);
// document.write("<br>The Area of circle is : "+area);    