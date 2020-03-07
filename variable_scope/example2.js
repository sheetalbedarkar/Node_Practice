let globalLet = "This is global variable";
function fun()
{
    localLet = "This is local variable";
}
fun();
console.log(globalLet);
/**
 * localLet was created in the global scope as 
 * we missed the keyword let while declaring it.
 */
console.log(localLet);
//expected output: This is global variable
//				   This is local variable