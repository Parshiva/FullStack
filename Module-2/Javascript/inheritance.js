
Array.prototype.sum = function ()
{
    let sum=0;

    for (let i=0 ; i<this.length ;i++)
    {
        sum+=this[i];
    }

    console.log(sum);
}

const arr=[1,2,3,4,5];

console.log(typeof arr);
arr.push(100);
arr.sum();