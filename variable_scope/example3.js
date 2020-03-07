let globalLet = "This is global variable";
function fun()
{
    //same name and different scope
    let globalLet = "This is local variable";
}
fun();
//matters here is the scope in which we are accessing it
console.log(globalLet)

let localLet = "This global variable";
function fun2()
{
    //same name and different scope
    let localLet = "This is local variable";
    //matters here is the scope in which we are accessing it
    console.log(localLet);
}
fun2();
//expected output: This is global variable
//				   This is local variable