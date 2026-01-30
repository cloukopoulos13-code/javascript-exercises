const sumAll = function(int1, int2) 
{
    let allNums = [];
    
    if(Number.isInteger(int1) === false || Number.isInteger(int2) === false || int1 < 0 || int2 < 0)
    {
        return "ERROR";
    }

    if(int1 > int2)
    {
        const temp = int1;
        int1 = int2;
        int2 = temp;

    }

    for(let i = int1; i <= int2; i++)
    {
        allNums.push(i);
    }

    return allNums.reduce((accumulator, current) => accumulator + current);
};

// Do not edit below this line
module.exports = sumAll;
