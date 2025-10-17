// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add Node.js polyfills for React Native
config.resolver.extraNodeModules = {
  crypto: require.resolve('react-native-quick-crypto'),
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer'),
  process: require.resolve('process/browser.js'),
  path: require.resolve('path-browserify'),
  os: require.resolve('os-browserify/browser'),
  http: require.resolve('http-browserify'),
  https: require.resolve('https-browserify'),
  url: require.resolve('url'),
  assert: require.resolve('assert'),
  util: require.resolve('util'),
  querystring: require.resolve('querystring'),
  events: require.resolve('events'),
  net: require.resolve('react-native-tcp-socket'),
  tls: require.resolve('react-native-tcp-socket'),
  // Ensure "ws" resolves to the browser implementation to avoid bundling Node-only server files
  ws: require.resolve('isomorphic-ws/browser.js'),
};

// Ensure these globals are available
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// // Block problematic server modules
// config.resolver.blockList = [
//   /ws\/lib\/websocket-server\.js$/,
//   /ws\/wrapper\.mjs$/,
// ];

// Remove blockList for ws files so Metro can correctly resolve the browser entry
// (blocking wrapper.mjs caused Metro to fall back to Node's index.js, which imports server-only modules)
module.exports = config;
