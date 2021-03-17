//function call by value

var x=10;

y=2;

function display()
{
    const y= 34;
    console.log(y);
   // y=44;
    //console.log(y);

    x=12;
    console.log(x);
}

function calc( num1, num2)
{
    num3 = num1+num2
    console.log(num3);
}


console.log(x);
display();
y=39;
console.log(y);
calc(2,6);








