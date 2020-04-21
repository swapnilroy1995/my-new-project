import {AppRegistry} from 'react-native';
import App from './src1/App'
import countFunction from './src1/screens/Practise'
import {expo} from 'app.json';
const appName  =expo.name;

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => countFunction);

