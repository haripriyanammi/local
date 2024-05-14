let a=10;
let b=2;
console.log("a+b=", a+b);
console.log("a=",a, "& b=",b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
//unary
console.log("a++=",a++,"& b++=",b++);
console.log("--a=",--a,"& --b=",--b);
//assignment
let x=3;
let y=5;
x**=2;
console.log("x=",x);
y/=5
console.log("y=",y);
//comparison 
let q=3;
let w="3";
console.log("3>=3",q>=w);
//logical operator
let e=9;
let r=10;
let c1= e<r;
let c2= e==9;
console.log("c1 && c2=",c1 && c2);
console.log("c1 || c2=",e<r || e==8);
console.log("!(e>r)=",!(e>r));
//conditional
let age=11;
if(age>=18)
    {
        console.log("can vote");
    }
else{
    console.log("you cannot");
}
let mode="light";
let color;
if(mode=="dark")
    {
        color="black";
    }
if(mode=="light")
    {
        color="white";
    }
    console.log(color);
    //odd or even
    let n=2;
    if(n%2==0)
        {
            console.log(n, "is even");
        }
    else{
        console.log(n,"is odd");
    }
    let hari=23;
    if(hari<18)
        {
            console.log("junior");
        }
    else if(hari>60)
        {
            console.log("senior");
        }
    else if(hari==23)
        {
            console.log(hari);
        }   
        else{
            console.log("middle");
        }
        //ternary
        let harry=19;
        let result= harry==19? "major":"minor";
        console.log(result);
        //alert("hello");
        prompt("hello");
        let potter=prompt("hi");
        console.log(potter);
        //practise
        let  num=prompt("enter a number");
        if(num%5===0){
            console.log("num is mul of 5");
        }
        else
        {
            console.log("not of 5");
        }