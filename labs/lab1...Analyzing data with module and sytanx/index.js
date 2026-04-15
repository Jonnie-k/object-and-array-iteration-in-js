const combineUsers = (...arrays) => {
  const users = arrays.flat();

  // Use toLocaleDateString() for the standard MM/DD/YYYY format
  const merge_date = new Date().toLocaleDateString();

  return {
    users,
    merge_date
  };
};

module.exports = { combineUsers };