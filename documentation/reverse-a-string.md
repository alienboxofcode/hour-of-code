# H3 21/11/2018 Reverse a String Challenge

[
    "JavaScript"
]
There are a lot of ways in which we can reverse strings in Javascript. One of such ways is through a forloop.

1. Declare a function. Pass in a parameter eg:

    ```JavaScript
    function name (parameter){
    };
    ```

2. Declare a variable and give it an empty value. This variable will be used to save the new string eg:

    ````JavaScript
    var newString = " ";
    ```

3. Create the ForLoop.
    * The initialization of the loop will be the value that was passed in as the parameter `str.length-1.` For example, if the parameter is `str` then       the starting point of the loop will be `var i = str.length - 1`.
    * The second statement in the loop would be `i>=0`. This condition will remain true as long as i is greater than or equals to 0.
    * The third statement is the iteration `i--`. i is decremented after each loop. eg.

    ````JavaScript
    for(i=str.length-1; i>=0; i--){
    }
    ```

4. Next, we save the array of the string into the new string we'd declared `newString` eg.

````JavaScript
newString += str[i];
````

5. Return the new string. eg. `return newString`.

* Now writing it in codes

````JavaScript
function reverseString(str){
    var newString = " ";
    for (var i = str.length-1; i<0; i--){
        newString += str[i];
    }
    return newString;
}
reverseString("AlienBoxofCode");
```
