async function myFunc()
{
    let promise = new Promise((resolve,reject)=>
    {
        setTimeout(()=>
                    resolve("Done!!"),4000);
        
    })

    let result = await promise;
    console.log(result);
}
myFunc();