var fact=1;
var n=parseInt(prompt("Enter Number greater than 0 to calculate Factorial : "));
if(n>1){
  for(var i=n;i>0;i=i-1){
    fact = fact*i;
  }
alert(fact+" is factorial of "+n);
}
else if (n==0 || n==1){
  alert("Factorial of 0 or 1 = 1");
}
else{
    alert("Invalid Input");
}