const repeatString = function(string, num) 
{   
    let newString = '';

    if(num < 0)
    {
        return "ERROR";
    }

    for (let repeat = 0; repeat < num; repeat++)
    {
        newString += string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
