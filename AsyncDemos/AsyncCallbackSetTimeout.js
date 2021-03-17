p=100, q=200;

function sum (a,b,cd)
{
    console.log("This is the function of sum... after this callback() will be triggered");
    setTimeout(function()
    {
        cd(a+b);
    },5000)
}

function div (a,b,cd)
{
    console.log("This is the function of div... after this callback() will be triggered");
    setTimeout(function()
    {
        cd(a/b);
    },5000)
}


sum(p,q, function(sumResult)
{
    div(sumResult,2,function(avg)
    {
        console.log(avg);
        console.log("Async process achieved!");
    })
})