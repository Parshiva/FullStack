const p1 = new Promise(function(resolve , reject)
{
    setTimeout(()=>{resolve("The promise p1 is resolved");},5000);
});

const p2 = new Promise(function(resolve , reject)
{
    setTimeout(()=>{resolve("The promise p2 is resolved");},10000);
});

// p1.then((data)=>{console.log(data);}).catch((err)=>{console.log("err --> ",err)}).finally((data)=>{"This Promise is Settled"});

function resolvePromise()
{
    p1.then((data)=>{console.log(data);});
}

async function handlePromise()
{
    let start=Date.now();
    let value = await p1;
    console.log("Scaler-1");
    console.log(value)    

    let value1 = await p2;
    console.log("Scaler-2");
    console.log(value1);

    let end = Date.now();

    console.log("Elapsed Time -- > ",(end-start)/1000);
}

// resolvePromise();
handlePromise();