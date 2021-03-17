//predefined array functions

const arrFunc1 = ()=>
{
    var arr = [77,88,99,111];
    var result = arr.find(x=>x>90);
    console.log(result);
}

const arrFunc2 = ()=>
{
    var arr = [77,88,99,111];
    var result = arr.findIndex(x=>x>90);
    console.log(result);
}

arrFunc1();
arrFunc2();