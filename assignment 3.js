var num=parseInt(prompt("Enter a Number :"));
var c=0;
for(let i=1;i<=num;i=i+1){
     if(num%i==0){
          c=c+1;
     }
}
if(c%2===0){
     alert(num+" is not perfect square");
}
else{
     alert(num+" is perfect square");
}