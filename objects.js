// Create an object called user that has name, age, password properties and assign them appropriate values.
// Code Here
var user = {
  name:'John Smith',
  age:18,
  password:'password'
};
// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.
// Code Here
user.email='jsmith@gmail.com';
user.username='mrsmith';
// Now loop over your user object and alert each of the keys.
// Code Here
(function(){
  for(var key in user){
    alert(key);
  }
})();
// Now loop over your user object and alert each of the values for each key.
// Code Here
(function(){
  for(var key in user){
    alert(user[key]);
  }
})();
// Remove the username from your user object
// Code Here
delete user.username;
// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.
// Code Here
var creditCard={
  number:'chris pak',
  cvc:911,
  type:'Visa',
  limit:500
};
// Create a variable called alternating. Set it equal to the string bonusCategories.
// Code Here
var alternating = 'bonusCategories';
/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%)

    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    */
// Code Here
creditCard[alternating]=[
  {grocery, 2%},
  {pharmacy, 1%},
  {gas, 2.5%}
];
creditCard.bank={bank:'chase', address:'123 number st dallas tx 75201'};
// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */
// Code Here

// How to add properties to new object from existing object?
// Solution : var newObj = {}; for(var key in creditObj){ newObj[key] = creditObj[key]; } for(var prop in userObj){ newObj[prop] = userObj[prop]; console.log(userObj[prop]); }

(function(cc,user){
  for(var prop in creditCard){
    user[prop]=creditCard[prop];
  }
})();

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here
