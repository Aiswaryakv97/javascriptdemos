
function sum(a,b)
{
     return new Promise((resolve,reject)=>
     {
         setTimeout(function()
         {
             const sumResult = a+b;
             resolve(sumResult);
         },5000)
     })
}
function div(a,b, cd)
{
     return new Promise((resolve,reject)=>
     {
         setTimeout(function()
         {
             const div = a/b;
             resolve(div);
         },5000)
     })
}
const promise = sum(100);

promise.then((sumResult)=>
{
    div(sumResult,2).then((avg)=>
    {
        console.log(avg);
    })
})

console.log("Async awaited");





