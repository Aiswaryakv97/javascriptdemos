//Arrow function with token arrow (Same as Lambda expression (->) in Java )

const demo = () =>
{
    x=20;
    y=9;
    result = x+y;
    console.log(result);
    
    result = x-y;
    console.log(result);

    result = x*y;
    console.log(result);

    result = x/y;
    console.log(result);

}

const func1 = () =>
console.log("This is an arrow function");

demo();
func1();