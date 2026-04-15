const user = { username: "john", password: "1234" };

const login = createLoginTracker(user);

console.log(login("wrong")); // Incorrect password
console.log(login("wrong")); // Incorrect password
console.log(login("wrong")); // Account locked
console.log(login("1234"));  // Account locked  