The reduce() method executes a reducer function(that you provide)
on each element of the array, resulting in a single output value.

Note => 
If intialValue is not provided, reduce() will execute the callback function
starting at index 1, skipping the first index. If intialvalue is provide, it will start
at index 0

If the array is empty and no intialvalue is provided, TypeError will be thrown