const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Utility Functions', () => {
  
  test('capitalizeWords should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('jest is fun')).toBe('Jest Is Fun');
  });

  test('capitalizeWords should handle an empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });
});