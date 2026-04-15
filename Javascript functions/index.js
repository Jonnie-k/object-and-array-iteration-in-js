function createLoginTracker(userInfo) {
  let attempts = 0;
  const maxAttempts = 3;

  return (password) => {
    if (attempts >= maxAttempts) {
      return "Account locked";
    }

    if (password === userInfo.password) {
      attempts = 0; // reset on success
      return "Login successful";
    } else {
      attempts++;

      if (attempts >= maxAttempts) {
        return "Account locked";
      }

      return "Incorrect password";
    }
  };
}