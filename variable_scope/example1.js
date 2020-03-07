let globalLet = "This is global variable";

function fun()
{
    let localLet = "This is local variable";
    console.log(globalLet);
    console.log(localLet);
}
fun();
//expected output: This is global variable
//				   This is local variable
