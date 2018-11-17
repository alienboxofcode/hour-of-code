# H2 16/11/2019 Hour of Code

## Javascript Objects

[
    "JavaScript"
]

An object is a collection of related data and/ or functionality which usually consists of several functions and            variables which are called properties and methods when they are inside the objects

* An object is made up of multiple members.
* An object has a name eg 'name', 'age'.
* An object has a value eg 'Ifunanya', '25'
* An object name and value pair are separated by a comma. eg name: 'Ifunanya',
* An object name and value are separated by a colon. 

    ```JavaScript
    var person = {
        name: 'Ifunanya',
        age: 25
    };
    ```
* Data Items are referred to as the object's properties. Data items can be the string, number, and/ or array.
* functions allow the object do something with the data and they are referred to as the object's methods

**dot notation** is the method of accessing an object using the dot (.) eg person.name
**sub namespace** is the process of making the value of an object member to another object. eg

````JavaScript
var person = {
    name:{
        first: 'Ifunanya',
        last: 'Okolie'
    }
};
````

## Still on Sub Namespace

The above makes 'name', which is the value of person another object. Using the above process would mean that we would have to change the value of our method in the case where we call our method by ````this.name [0]``` We would change the method to this.name.first. Without doing this, our object will not work.

````JavaScript
person [age]
person ['name'] ['first']
```

### RESOURCES
[MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics/)