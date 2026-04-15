function createLoginTracker(userInfo) {
  let attempts = 0;

  return (password) => {
    if (attempts >= 3) return "Account locked";

    if (password === userInfo.password) {
      attempts = 0;
      return "Login successful";
    }

    attempts++;
    return attempts >= 3 ? "Account locked" : "Incorrect password";
  };
}

const user = { username: "john", password: "1234" };
const login = createLoginTracker(user);

console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("1234"));
