// combineUsers function
function combineUsers(...arrays) {
  // Merge all arrays into one using spread
  const users = [].concat(...arrays);

  // const users = arrays.flat();

  // Get today's date
  const merge_date = new Date().toDateString();

  // Return required object
  return {
    users,
    merge_date
  };
}

module.exports = combineUsers;