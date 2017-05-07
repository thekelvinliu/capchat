import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddContactScreen from './AddContactScreen';
import ChatScreen from './ChatScreen';
import ContactsScreen from './ContactsScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import ProfileScreen from './ProfileScreen';
import RegistrationScreen from './RegistrationScreen';

// export lone registration screen
export const Registration = StackNavigator({
  Registration: {
    screen: RegistrationScreen
  }
});

// navigation routes
const routes = {
  AddContact: {
    screen: AddContactScreen
  },
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
  }
};

// additional config options
const options = {
  initialRouteName: 'Home',
  mode: (Platform.OS === 'ios') ? 'modal' : 'card',
  headerMode: (Platform.OS === 'ios') ? 'float' : 'screen',
  navigationOptions: {
    headerBackTitle: 'back'
  }
};

// export main app navigation by default
export default StackNavigator(routes, options);
