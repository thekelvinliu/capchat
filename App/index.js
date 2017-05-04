import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './screens/ChatScreen';
import ContactsScreen from './screens/ContactsScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';

import './globals';

const routes = {
  Chat: {
    screen: ChatScreen
  },
  Contacts: {
    screen: ContactsScreen
  },
  Home: {
    screen: HomeScreen
  },
  Menu: {
    screen: MenuScreen
  },
  Profile: {
    screen: ProfileScreen
  },
};

const App = StackNavigator(routes, {
  initialRouteName: 'Home',
  mode: (Platform.OS === 'ios') ? 'modal' : 'card',
  headerMode: (Platform.OS === 'ios') ? 'float' : 'screen'
});

export default App;
