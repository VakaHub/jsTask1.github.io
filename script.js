var num1 = prompt("Enter a number: ")
var opr = prompt("Enter any operator: +, -, *, / ")
var num2 = prompt("Enter another number: ")

num1=parseFloat(num1);
num2=parseFloat(num2);

if (opr == "+") 
{
	alert(num1 + num2)
} 

else if(opr == "-")
{
	alert(num1 - num2)
} 

else if(opr == "*")
{
	alert(num1 * num2)
} 

else if(opr == "/")
{
	alert(num1 / num2)
}