var person = {
    name: ['Ifunanya', 'Okolie'],
    age: 25,
    gender: 'female',
    interests: ['music', 'writing'],
    bio: function(){
        alert(this.name[0] + ' ' + this.name [1] + ' is ' + this.age + ' years old. She likes ' + this.interests [0] + ' and ' + this.interests [1] + '.');
    },
    greeting: function(){
        alert('Hi! I\'m ' + this.name [0] + '.');
    }
};

//Creating a sub-namespace - making the value of an object member another object. 

// var person = {
//     name: {
//         first: 'Ifunanya',
//         last: 'Okolie'
//     },
//     age: 25,
//     gender: 'female',
//     interests: ['music', 'writing'],
//     bio: function(){
//         alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests [0] + ' and ' + this.interests [1] + '.');
//     },
//     greeting: function(){
//         alert('Hi! I\'m ' + this.name.first + '.');
//     }
// };

