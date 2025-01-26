function outerfunction()
{
    let counter=0;

    function innerfunction()
    {
        counter++;
        //return counter;
        console.log(counter);
    }

    return innerfunction;
}

const innerFunc = outerfunction();

innerFunc();
innerFunc();
innerFunc();
innerFunc();

// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());