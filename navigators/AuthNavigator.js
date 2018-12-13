import { createStackNavigator, createAppContainer } from 'react-navigation';

import Authentication from '../screens/Authentication';
import RegisterForm from '../screens/RegisterForm';

const AuthNavigator = createStackNavigator({
    Auth: {
        screen: Authentication
    },
    Register: {
        screen: RegisterForm
    }
}, {
    initialRouteName: 'Auth'
});

export default createAppContainer(AuthNavigator);