

if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
}


//console.log(a);
//console.log(b);
console.log(c);


function one()
{
    const userName = "Hemant";

    function two()
    {
        const website = "Youtube";
        console.log(userName);
    }

    //console.log(website);

    two();
}

one();

if(true)
{
    const userName = "Hemant"

    if(userName === "Hemant"){
        const website = "YouTube"
        console.log(userName + website);
    }

    //console.log(website);
}

//console.log(userName);


//============================================= Interesting ========================================

console.log(addOne(5));
function addOne(num)
{
    return num + 1
}


//Function expression
const addTwo = function(num){
    return num + 2
}

addTwo(5);



