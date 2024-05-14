//for loop
for(let i=1;i<999;i++)

{
    console.log("hari"); 
} 
//calculate sum of 1 to n
let sum=0;
let n=6;
for(i=1;i<=n;i++)
{
    sum=sum+i;
}
console.log("sum=",sum);
//while loop
let j=1;
while(j<=7)
    {
        console.log("j=",j);
        j++;
    }
//do while
let k=1;
do{
    console.log("k=",k);
    k++;
}
while (k<=3);
//for of loop
let str="harry potter";
let size=0;
for(let val of str)
    {
        console.log("val=",val);
        size++;
    } 
    console.log("string size:",size);
//for in loop
let college={
    surname:"sri",
    years:2024,
    cgpa:7.9,
    ispass:true,
};
for(let key in college)
    {
        console.log("key=",key,"& value=",college[key]);
    }    
 //game
 let gamenum=30;
 let usernum=prompt("guess the number");
 while(usernum!=gamenum)
    {
        usernum=prompt("you are wrong.Guess again:");
    }   
   console.log("congratulations you entered correct");
   let originame="priya";
   let guessname=prompt("guess the name");
   if(originame!=guessname)
    {
        originame=prompt("guess again");
    }
    console.log("you are correct");
   
   
   //strings
   let str1 = "neeraja";
   let str2="chandu";
   console.log(str1[2]);