let promise = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        const isHead = Math.random()>=0.5;

        if (isHead)
        {
            resolve("We got Heads and Promise got FulFilled");
        }
        else
        {
            reject("We got Tails and Promise got rejected");
        }
    },1000);
});

promise.then(function(data){
    console.log(data);
});

promise.catch(function(error){
    console.log(error);
});

promise.finally(function(){
    console.log("Promise is settled");
});
