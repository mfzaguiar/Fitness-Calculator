/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config'); //eslint-disable-line

module.exports = (async () => {
  await getDefaultConfig();
  return {
    transformer: {
      experimentalImportSupport: false,
      inlineRequires: false,
    },
  };
})();
