module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Each plugin should be a string or an array [name, options]
      'react-native-reanimated/plugin',
    ],
  };
};