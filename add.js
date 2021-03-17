//var num1 = 4;
//num2 = 10;

//result = num1+num2;
//console.log(result);

let result;
class MyClass
{
   
    constructor(num1,num2)
    {
        
        this.x=num1;
        this.y= num2;
        result = this.x+this.y;

    }
      addition()
    {
        
        console.log("The result is: "+result);

    }


}

var obj = new MyClass(6,7);
obj.addition();

