/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Import mParticle
import MParticle from 'react-native-mparticle';

// Initialize mParticle with your API key
MParticle.startWithOptions({
  apiKey: 'YOUR_MPARTICLE_API_KEY',
  apiSecret: 'YOUR_MPARTICLE_API_SECRET',
  appName: 'MParticle',
  logLevel: MParticle.LogLevels.Debug, // Set the desired log level
});

AppRegistry.registerComponent(appName, () => App);
