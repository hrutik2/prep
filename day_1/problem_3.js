// Suppose you have an array of user objects, each with the structure { id, name, age, city }. Write the following functions:

// filterAdults(users): Returns an array of users whose age is 18 or above.
// mapUserNames(users): Returns an array of names extracted from the user objects.
// groupUsersByCity(users): Returns an object where each key is a city, and its value is an array of users from that city.

const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
  ];

function filterAdults(users) {
    let ans=users.filter(user => user.age >= 18);
    return ans;
}
function mapUserNames(users) {
    let ans=users.map(user=>{
        return user.name
    })
    return ans;
}
function groupUsersByCity(users) {
    let obj={}
    users.forEach(el => {
        if (obj[el.city]==undefined) {
            obj[el.city]=[]
        }
        obj[el.city].push(el)
    });
    return obj
}