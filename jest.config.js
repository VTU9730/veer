module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)', // add any other ES6 modules here
    ],
    moduleFileExtensions: ['js', 'jsx'],
  };
  