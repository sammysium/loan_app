module.exports = {
  preset: 'react-native',
  "transformIgnorePatterns": [
  "node_modules/(?!(validator|@react-native|react-native|react-native-vector-icons)/)"
],
"moduleDirectories": ["node_modules", "<rootDir>/src"],
  "roots": ["<rootDir>"]
};
