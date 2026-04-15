function createLoginTracker(userInfo) {
  let attemptCount = 0; 
  const maxAttempts = 3;

  return (passwordAttempt) => { 
    if (attemptCount >= maxAttempts) {
      return "Account locked";
    }

    if (passwordAttempt === userInfo.password) {
      attemptCount = 0; 
      return "Login successful";
    } else {
      attemptCount++;

      if (attemptCount >= maxAttempts) {
        return "Account locked";
      }

      return "Incorrect password";
    }
  };
} 
module.exports = { createLoginTracker };